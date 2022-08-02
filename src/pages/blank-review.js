import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
import { Col, Container, Row, Form, FormGroup, Input, Label } from 'reactstrap';
const MainPage = React.lazy(() => import('../components/main-page/main-page'));

const BlankReview = () => {
    const navigate = useNavigate()
    useEffect(() => {
        document.title = "Blank Review - Qool Qatar";
    }, []);

    const [rating, setRating] = useState(0) // initial rating value

    const [initialState, setInitialState] = useState({});
  const { title, description } = initialState;

    const handleInpChange = (e) => {
        let { name, value } = e.target;
        setInitialState({
            ...initialState,
            [name]: value,
        })
    }

    const handleRating = (rate) => {
        setRating(rate)
        console.log(rate / 20)
        // other logic
    }

    async function handleSubmit(e) {
        navigate('/blank-review1')
        window.location.reload();
        // e.preventDefault()
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //           title: initialState.title,
        //           description: initialState.description,
        //           reviewCount:rating,
        //         //   userId: "00000100000"
        //           userId: "12313131",
        //           name: "Mohtasheem -1",
        //           phoneNumber: "+917091957007"
        //     })
        // };
        // fetch('http://159.65.152.119/api/v1/profile/create', requestOptions)
        //     .then(response => response.json())
        //     // .then(data => this.setState({ postId: data.id }));
        //     .then(data => console.log(data));
    }

    return (
        <MainPage>
            <section>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <ul className="breadcrumb">
                                <li>Adventure</li>
                                <li><img src={require('../assets/images/chevron-right.png')} alt="rightarrow" /></li>
                                <li>List of Vendors</li>
                                <li><img src={require('../assets/images/chevron-right.png')} alt="rightarrow" /></li>
                                <li>Package</li>
                                <li><img src={require('../assets/images/chevron-right.png')} alt="rightarrow" /></li>
                                <li>Review</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="blank-review">
                        <Col lg={3}>
                            <img src={require('../assets/images/Rectangle37-Palette.png')} alt="review" className="review-img" />
                            <p className="your-rating">Your Ratings<span className="text-danger">*</span></p>
                            {/* <img src={require('../assets/images/Group105.png')} alt="rating" /> */}
                            <div>
                                <Rating onClick={handleRating} ratingValue={rating} /* Available Props */ />
                            </div>
                        </Col>
                        <Col lg={9}>
                            <div className="review-form">
                                <p className="name">Souq Waqif</p>
                                <p className="txt">Your Reviews</p>
                                <Form>
                                    <FormGroup>
                                        <Label>Write a headline for your review here</Label>
                                        <Input type="text" name="title" value={title} onChange={handleInpChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Write a description of your review here</Label>
                                        <Input type="textarea" rows={4} name="description" value={description} onChange={handleInpChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="add-photo">Add a Photo/Video</Label>
                                        <Input type="file" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input onClick={handleSubmit}  type="submit" value="Submit" className="review-btn" />
                                        
                                    </FormGroup>
                                </Form>
                                {/* <button onClick={handleSubmit}>Submit</button> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </MainPage>
    )
}

export default BlankReview;
