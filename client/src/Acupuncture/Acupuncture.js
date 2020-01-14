import React from 'react';
import api from "../api";
// import { Link } from 'react-router-dom';

class Acupuncture extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            disease: {
                disease_id: "",
                disease_name: "",
                disease_created_at: "",
            },
        }
    }

    componentDidMount () {
        this.getDisease(this.props.location.state.disease_id);
        this.getImages(this.props.location.state.disease_id);
    }

    async getDisease(id){
        await api.get('/diseases/' + id, {})
        .then((response) => {
            this.setState({disease:response.data});
            console.log(this.state.disease);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    getImages(disease_id) {
        api.get('/images', {
            params: {
                disease_id: disease_id
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
             <h1 style={{padding: '100px 0 30px'}} className="text-center">{this.state.disease.disease_name}</h1>
                <div style={{width: 'inherit'}} className="jumbotron mt-5">
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>ID:</td>
                                <td>{this.state.disease.disease_id}</td>
                            </tr>
                            <tr>
                                <td>Name:</td>
                                <td>{this.state.disease.disease_name}</td>
                            </tr>
                            <tr>
                                <td>Created At:</td>
                                <td>{new Date(this.state.disease.disease_created_at).toLocaleString()}</td>
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
