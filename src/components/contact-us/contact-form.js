import React from 'react';
import { Button, Form, FormGroup, FormLabel } from 'react-bootstrap';
import { Input } from 'reactstrap';
import "../../assets/css/Pages.css";

const ContactForm = () => {
    return (
        <div>
            <div className='contact-container-1'>
                <h1 className='contact-contaner-1-h-1'>Love to hear from you, Get in touch 👋🏻</h1>
            </div>
            <div className='contact-container-2'>
                <Form className="contact-form">
                    <FormGroup>
                        <FormLabel>Name</FormLabel>
                        <Input
                            type="text"
                            name="name"
                            placeholder="Robert Fox"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            name="email"
                            placeholder="robertfox@gmail.com"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Your Message</FormLabel>
                        <Input className='input-textArea'
                            type="textarea"
                            name="mobile"
                            placeholder="write your message..."
                        />
                    </FormGroup>
                    <Button className='contact-form-btn' >Submit</Button>
                </Form>
            </div>
            <div className='contact-container-3'></div>
        </div>
    )
}

export default ContactForm