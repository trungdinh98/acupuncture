import React from "react";
import api from "../api";
import { Redirect } from "react-router";
import jwt_decode from 'jwt-decode';
import './Diseases.css';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import NewDisease from './CreateNewDisease';

export const createDisease = disease => {
    return api
    .post('/diseases', {
        disease_name: disease.disease_name,
        user_id: disease.user_id
    })
    .then((response) => {
        this.getDiseases(this.state.user_id);
        Diseases.close();
    })
    .catch((err) => {
        console.log(err);
    })
}

class Diseases extends React.Component{
    constructor() {
        super();
        this.state = {
            time: "",
            date: "",
            diseases: [],
            subdiseases: [],
            user_id: '',
            modalShow: false,
            dropDownValue: "Chọn tên bệnh",
            renderDiseases: ({disease_id, disease_name}) =>
                <Dropdown.Item key={disease_id} as="button"><div onClick={(e) => this.changeValue(e.target.textContent)}>{disease_name}</div></Dropdown.Item>
        }
        this.onChange = this.onChange.bind(this)
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this._isMounted = false;
    }

    componentDidMount () {
        const token = localStorage.usertoken;
        if (token === undefined) {
            this.props.history.push(`/login`)
        } else {
            const decode = jwt_decode(token);
            this.setState({
                user_id: decode.user_id
            });
            this.getDiseases(decode.user_id);
        }
    }

    changeValue(text) {
        this.setState({dropDownValue: text});
        this.getSubdiseases(text);
    }

    async getSubdiseases(disease_name){
        await api.get('/subdiseases', {
            params: {
                disease_name: disease_name
            }
        })
        .then((response) => {
            this.setState({subdiseases:response.data});
            console.log(this.state.subdiseases);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    async getDiseases(user_id){
        await api.get('/diseases', {
        })
        .then((response) => {
            this.setState({diseases:response.data});
            console.log(this.state.diseases);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    redirectToDisease = (time, date, subdisease_id) => {
        console.log(time, date, subdisease_id);
        if (time === "" || date === "") {
            alert("Bạn cần điền đợt và ngày trước khi xem !");
        } else {
            this.setState({redirect : true, time: time, date: date, subdisease_id: subdisease_id})
        }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state.time);
        console.log(this.state.date);
    }

    close() {
        this.setState({ modalShow: false });
    }

    open() {
        this.setState({ modalShow: true });
    }

    componentWillUnmount () {
        this._isMounted = false;
    }

    renderTableData(){
        return this.state.subdiseases.map((subdisease, index) => {
            return (
                <tr key={subdisease.subdisease_id}>
                    {/*<td>{subdisease.subdisease_id}</td>*/}
                    <td>{subdisease.subdisease_name}</td>
                    {/*<td>{new Date(subdisease.subdisease_created_at).toLocaleString()}</td>*/}
                    <div className="option">
                        <input type="text" placeholder="Đợt" name="time" value={this.state.time} onChange={this.onChange}/>
                        <input type="text" placeholder="Ngày" name="date" value={this.state.date} onChange={this.onChange}/>
                    </div>
                    <td><button className="show-disease" onClick={() => this.redirectToDisease(this.state.time, this.state.date, subdisease.subdisease_id)}>Xem</button></td>
                </tr>
            )
        })
    }

    render(){
        const {redirect, time, date, subdisease_id, diseases} = this.state;
        let {modalShow} = this.state
        return (
            <div style={{width: '-webkit-fill-available'}}>
                <div className="top-content">
                    <p className="mytitle">Lựa chọn bệnh</p>
                    <DropdownButton id="dropdown-item-button" title={this.state.dropDownValue}> 
                        { diseases.map(this.state.renderDiseases) }
                    </DropdownButton>
                    {/*<button className="new-disease" onClick = {this.open}>New Disease</button>*/}
                </div>
                <div className="bot-content">
                    <table className="disease-table">
                        <thead>
                            <tr>
                                {/*<th className="disease-id">Sub-Disease ID</th>*/}
                                <th className="disease-name">Triệu chứng kèm theo (Chọn đợt và ngày châm để xem chi tiết)</th>
                                {/*<th className="disease-time">Created At</th>*/}
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                </div>
                <NewDisease userid={this.state.user_id} show={modalShow} onHide={this.close}/>
                {redirect && (<Redirect to={{ pathname: '/subdiseases/' + subdisease_id, state: {time, date, subdisease_id}}}/>)}
            </div>
        )
    }
}

export default Diseases;
