import React from 'react';
import { Button, Form, FormGroup, FormLabel } from 'react-bootstrap';
import { Input } from 'reactstrap';

const EditProfile = () => {
    return (
        <div className="edit-profile">
            <h3>Edit Profile</h3>
            <div className="upload-box">
                <div>
                    <img src={require('../../assets/images/Ellipse22.png')} alt="user" className="user" />
                    <Button>Upload new photo</Button>
                </div>
                <div className="del-box">
                    <img src={require('../../assets/images/Delete.png')} alt="delete" />
                </div>
            </div>
            <Form className="edit-form">
                <FormGroup>
                    <FormLabel>Name</FormLabel>
                    <Input 
                        type="text"
                        name="full-name"
                        placeholder="Robert Fox"
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <Input 
                        type="email"
                        name="your-email"
                        placeholder="robertfox@gmail.com"
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Mobile Number</FormLabel>
                    <Input 
                        type="text"
                        name="mobile-number"
                        placeholder="+974 987654321"
                    />
                </FormGroup>
            </Form>
        </div>
    )
}

export default EditProfile;