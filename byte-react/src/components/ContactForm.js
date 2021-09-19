import React from 'react';
import {Form, Button as BootButton} from 'react-bootstrap';

const ContactForm = () => {
    return (
<div className="contact-form">
<h2 className="heading">Contact Form</h2>
                    <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label>Name</Form.Label>
    <Form.Control className="formInput" type="text"/>
    <Form.Label>Email address</Form.Label>
    <Form.Control className="formInput" type="email"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control className="formInput" as="textarea" rows={3} />
  </Form.Group>
  <BootButton variant="primary" className="formButton" type="submit">Submit</BootButton>
</Form>
</div>
    );
};

ContactForm.propTypes = {};

export default ContactForm;