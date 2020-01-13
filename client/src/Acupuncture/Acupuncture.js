import React from 'react';
import api from "../api";

class Acupuncture extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disease: {
                disease_id: "",
                disease_name: "",
                disease_created_at: ""
            },
        }
    }

    componentDidMount () {
        this.getDisease(this.props.location.state.disease_id);
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

    render () {
        return (
            <div style={{float:'none'}} className="container">
             <h1 style={{padding: '100px 0 30px'}} className="text-center">{this.state.disease.disease_name}</h1>
                <div style={{width: 'inherit'}} className="jumbotron mt-5">
                    <div>
                        <img alt="avatar" src="/image/avatar.jpeg"/>
                    </div>
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
            </div>
        )
    }
}

export default Acupuncture;
