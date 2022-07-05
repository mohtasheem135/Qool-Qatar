import React from 'react';
import { Col, Container, Form, FormGroup, Row } from 'reactstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col lg={12}>
                        <img src={require('../../assets/images/qool-qatar-logo.png')} alt="logo" />
                    </Col>
                </Row>
                <Row className="bottom-footer">
                    <Col lg={8}>
                        <div className="copyright">
                            <p>© 2022 Qool Qatar All rights reserved.</p>
                            <ul>
                                <li><a href={() => true}>Terms  of Use</a></li>
                                <li><a href={() => true}>Privacy & Cookies</a></li>
                                <li><a href={() => true}>Site Map</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <Form>
                            <FormGroup>
                                <select>
                                    <option selected value="$ USD">$ USD</option>
                                    <option value="$ USD">$ USD</option>
                                </select>
                            </FormGroup>
                            <FormGroup>
                                <select>
                                    <option selected value="United States">United States</option>
                                    <option value="United States">United States</option>
                                </select>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
