import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const BasicForm = () => {
    return <Form className="w-100 mt-3">
        <Form.Row className="align-items-center justify-content-center">
            <Col sm={5} className="my-1">
                <Form.Label htmlFor="inlineFormInputName" srOnly>
                    Note
                </Form.Label>
                <Form.Control id="inlineFormInputName" placeholder="Enter Note" />
            </Col>
            <Col xs="auto" className="my-1">
                <Button type="submit">Add</Button>
            </Col>
        </Form.Row>
    </Form>
}
export default BasicForm