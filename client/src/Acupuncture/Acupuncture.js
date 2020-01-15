import React from 'react';
import api from "../api";

class Acupuncture extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            subdisease: {
                subdisease_id: "",
                subdisease_name: "",
                subdisease_created_at: "",
                disease: {
                    disease_name: ""
                }
            },
        }
    }

    componentDidMount () {
        // console.log(this.props);
        this.getSubDisease(this.props.location.state.subdisease_id);
        this.getImages(this.props.location.state.time, this.props.location.state.date, this.props.location.state.subdisease_id);
    }

    async getSubDisease(id){
        await api.get('/subdiseases/' + id, {})
        .then((response) => {
            this.setState({subdisease:response.data});
            console.log(this.state.subdisease);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    getImages(time, date, subdisease_id) {
        api.get('/images', {
            params: {
                time: time,
                date: date,
                subdisease_id: subdisease_id
            }
        })
        .then((response) => {
            this.setState({images:response.data});
            console.log(this.state.images);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    renderTableData(){
        return this.state.images.map((image, index) => {
            return (
                <div className="text-center mt-5" style={{width: '100%'}} key={image.image_id}>
                    <img alt="Acupuncture" src={image.image_path} useMap="#acupuncturemap"/>
                    <map name="acupuncturemap">
                      <area shape="circle" coords="302,90,60" alt="Head" href="/head"/>
                      <area shape="rect" coords="0,150,604,450" alt="Back" href="/back"/>
                      <area shape="rect" coords="0,460,604,820" alt="Leg" href="/leg"/>
                    </map>
                </div>
            )
        })
    }

    render () {
        return (
            <div style={{float:'none'}} className="container">
             <h1 style={{padding: '100px 0 30px'}} className="text-center">{this.state.subdisease.disease.disease_name}: {this.state.subdisease.subdisease_name}</h1>
                <div style={{width: 'inherit'}} className="jumbotron mt-5">
                    <div className="text-center float-none">
                        Đợt {this.props.location.state.time}, Ngày châm thứ {this.props.location.state.date}
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>Name:</td>
                                <td>{this.state.subdisease.subdisease_name}</td>
                            </tr>
                            <tr>
                                <td>Created At:</td>
                                <td>{new Date(this.state.subdisease.subdisease_created_at).toLocaleString()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {this.renderTableData()}
            </div>
        )
    }
}

export default Acupuncture;
