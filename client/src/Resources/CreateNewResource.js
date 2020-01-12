import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { createResource } from './Resources';
import api from '../api';
import { Dropdown, DropdownButton } from 'react-bootstrap';


class CreateNewResource extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            resource_name: "",
            resource_key_id: "",
            resource_dns: "",
            resource_user: "",
            keys: [],
            dropDownValue: "Select an Key ID",
            renderTableData: ({key_id, key_name}) =>
                <Dropdown.Item key={key_id} as="button"><div onClick={(e) => this.changeValue(e.target.textContent)}>{key_id}</div></Dropdown.Item>
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentWillReceiveProps(newProps) {
        if (newProps.projectid !== this.props.projectid) {
            this.getKeys(newProps.projectid);
        }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    changeValue(text) {
        this.setState({dropDownValue: text});
    }

    getKeys (project_id) {
        this._isMounted = true;
        api.get("/keys", {
            params: {
                project_id: project_id 
            }
        })
        .then((response) => {
            this.setState({keys:response.data});
            console.log(response.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    onSubmit(e) {
        e.preventDefault()
        let resource = {
            project_id: this.props.projectid,
            resource_name: this.state.resource_name,
            resource_key_id: this.state.dropDownValue,
            resource_dns: this.state.resource_dns,
            resource_user: this.state.resource_user
        }

        createResource(resource).then(response => {
            return this.props.onHide;
        })
    }

    render(){
        let { keys } = this.state;
        return(
            <Modal {...this.props} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Genaral Config</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>Resource Name</Form.Label>
                        <InputGroup>
                          <Form.Control
                            name="resource_name"
                            placeholder="Name"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={this.state.resource_name}
                            onChange={this.onChange}
                          />
                        </InputGroup>
                        <Form.Text className="text-muted mb-3">
                            Name of your new resource can edit late
                        </Form.Text>
                    </Form>

                    <Form>
                        <Form.Label>Resource User</Form.Label>
                        <InputGroup>
                          <Form.Control
                            name="resource_user"
                            placeholder="Ubuntu, Centos,..."
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={this.state.resource_user}
                            onChange={this.onChange}
                          />
                        </InputGroup>
                        <Form.Text className="text-muted mb-3">
                            User of your new resource (cannot change late)
                        </Form.Text>
                    </Form>

                    <Form>
                        <Form.Label>Resource DNS</Form.Label>
                        <InputGroup>
                          <Form.Control
                            name="resource_dns"
                            placeholder="1.1.1.1"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={this.state.resource_dns}
                            onChange={this.onChange}
                          />
                        </InputGroup>
                        <Form.Text className="text-muted mb-3">
                            DNS of your new resource (cannot change late)
                        </Form.Text>
                    </Form>

                    <Form>
                        <Form.Label>Resource Key</Form.Label>
                        <InputGroup>
                            <DropdownButton id="dropdown-item-button" title={this.state.dropDownValue}> 
                                { keys.map(this.state.renderTableData) }
                            </DropdownButton>
                        </InputGroup>
                        <Form.Text className="text-muted mb-3">
                            Key ID of your new resource (cannot change late)
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

export default CreateNewResource
