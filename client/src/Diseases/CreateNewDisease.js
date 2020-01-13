import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { createDisease } from './Diseases'

class CreateNewDisease extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            disease_name: ""
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()

        const disease = {
            disease_name: this.state.disease_name,
            user_id: this.props.userid
        }

        createDisease(disease).then(response => {
            return this.props.onHide;
        })
    }

    render(){
        return(
            <Modal {...this.props} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Genaral Config</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>Disease Name</Form.Label>
                        <InputGroup>
                          <Form.Control
                            name="disease_name"
                            placeholder="Name"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={this.state.disease_name}
                            onChange={this.onChange}
                          />
                        </InputGroup>
                        <Form.Text className="text-muted mb-3">
                            Name of your new disease can edit late !
                        </Form.Text>
                    </Form>
                </Modal.Body>
                <Modal.Footer> 
                    <Button onClick={this.props.onHide} variant="secondary">Cancel</Button>
                    <Button variant="primary" onClick={this.onSubmit}>Create</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default CreateNewDisease
