import React from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import { Label } from 'reactstrap';

const Currency = () => {
    return (
        <div className="currency-box">
            <h3>Currency</h3>
            <Form>
                <FormGroup>
                    <Label>Change Currency</Label>
                    <select>
                        <option selected value="United States Dollar">United States Dollar</option>
                        <option value="United States Dollar">United States Dollar</option>
                    </select>
                </FormGroup>
            </Form>
        </div>
    )
}

export default Currency;
