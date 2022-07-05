import React from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import { Label } from 'reactstrap';

const Language = () => {
    return (
        <div className="currency-box">
            <h3>Language</h3>
            <Form>
                <FormGroup>
                    <Label>Change Language</Label>
                    <select>
                        <option selected value="English (UK)">English (UK)</option>
                        <option value="English (UK)">English (UK)</option>
                    </select>
                </FormGroup>
            </Form>
        </div>
    )
}

export default Language;
