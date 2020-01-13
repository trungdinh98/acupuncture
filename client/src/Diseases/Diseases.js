import React from "react";
import api from "../api";
import { Redirect } from "react-router";
import jwt_decode from 'jwt-decode';
import './Diseases.css';
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
            diseases: [],
            user_id: '',
            modalShow: false
        }
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

    async getDiseases(user_id){
        await api.get('/diseases', {
            // params: {
            //     user_id: user_id
            // }
        })
        .then((response) => {
            this.setState({diseases:response.data});
            console.log(this.state.diseases);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    removeDisease(disease_id){
        api.delete('/diseases', {
            params: {
                disease_id: disease_id
            }
        })
        .then((response) => {
            this.getDiseases(this.state.user_id)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    redirectToUser = (disease_id) => {
        console.log(disease_id);
        this.setState({redirect : true, disease_id: disease_id})
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
        return this.state.diseases.map((disease, index) => {
            return (
                <tr key={disease.disease_id}>
                    <td>{disease.disease_id}</td>
                    <td>{disease.disease_name}</td>
                    <td>{new Date(disease.disease_created_at).toLocaleString()}</td>
                    <td><button className="delete-disease" onClick={() => {this.removeDisease(disease.disease_id)}}>Delete</button></td>
                    <td><button className="show-disease" onClick={() => this.redirectToUser(disease.disease_id)}>Show</button></td>
                </tr>
            )
        })
    }

    render(){
        const {redirect, disease_id} = this.state;
        let {modalShow} = this.state
        return (
            <div style={{width: '-webkit-fill-available'}}>
                <div className="top-content">
                    <input className="disease-search" type="text" placeholder="Find by disease ID or disease name" />
                    <button className="new-disease" onClick = {this.open}>New Disease</button>
                </div>
                <div className="bot-content">
                    <table className="disease-table">
                        <thead>
                            <tr>
                                <th className="disease-id">Disease ID</th>
                                <th className="disease-name">Disease Name</th>
                                <th className="disease-time">Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                </div>
                <NewDisease userid={this.state.user_id} show={modalShow} onHide={this.close}/>
                    {redirect && (<Redirect to={{ pathname: '/diseaseusers/', state: {disease_id}}}/>)}
            </div>
        )
    }
}

export default Diseases;
