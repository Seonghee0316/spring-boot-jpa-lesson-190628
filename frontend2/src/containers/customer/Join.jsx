import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap';


class Join extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerId: '',
            password: '',
            customerName: '',
            phone: '',
            city: ''
        }
    }
    render() {
        return (
            <div>
                <form onSubmit="{this.handleSubmit}">
                    <Form>
                        <Form.Group controlId="customerId">
                            <Form.Label>id</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>pwd</Form.Label>
                            <Form.Control type="password"/>
                        </Form.Group>
                        <Form.Group controlId="customerName">
                            <Form.Label>name</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group controlId="phone">
                            <Form.Label>phone</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group controlId="city">
                            <Form.Label>city</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                    </Form>
                    <Button variant="success">전송</Button>
                    <Button variant="danger">취소</Button>
                </form>

            </div>
        );
    }
}
export default Join;
