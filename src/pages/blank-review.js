import React, { useEffect} from 'react';
import { Col, Container, Row, Form, FormGroup, Input, Label } from 'reactstrap';
const MainPage = React.lazy(()=> import('../components/main-page/main-page'));

const BlankReview = () => {
    useEffect(() => {
        document.title = "Blank Review - Qool Qatar";
      }, []);

    return (
        <MainPage>
            <section>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <ul className="breadcrumb">
                                <li>Adventure</li>
                                <li><img src={require('../assets/images/chevron-right.png')} alt="rightarrow"/></li>
                                <li>List of Vendors</li>
                                <li><img src={require('../assets/images/chevron-right.png')} alt="rightarrow"/></li>
                                <li>Package</li>
                                <li><img src={require('../assets/images/chevron-right.png')} alt="rightarrow"/></li>
                                <li>Review</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="blank-review">
                        <Col lg={3}>
                            <img src={require('../assets/images/Rectangle37-Palette.png')} alt="review" className="review-img" />
                            <p className="your-rating">Your Ratings<span className="text-danger">*</span></p>
                            <img src={require('../assets/images/Group105.png')} alt="rating" />
                        </Col>
                        <Col lg={9}>
                            <div className="review-form">
                                <p className="name">Souq Waqif</p>
                                <p className="txt">Your Reviews</p>
                                <Form>
                                    <FormGroup>
                                        <Label>Write a headline for your review here</Label>
                                        <Input type="text" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Write a description of your review here</Label>
                                        <Input type="textarea" rows={4} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="add-photo">Add a Photo/Video</Label>
                                        <Input type="file" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="submit" value="Submit" className="review-btn" />
                                    </FormGroup>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </MainPage>
    )
}

export default BlankReview;
