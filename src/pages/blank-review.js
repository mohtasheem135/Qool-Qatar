import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
import { Col, Container, Row, Form, FormGroup, Input, Label } from 'reactstrap';
import Axios from 'axios';
const MainPage = React.lazy(() => import('../components/main-page/main-page'));

const BlankReview = () => {
    const navigate = useNavigate()


    const [image, setImage] = useState('')

    useEffect(() => {
        document.title = "Blank Review - Qool Qatar";

        // Log the key/value pairs
        console.log(Axios.defaults)
        // console.log(JSON.parse(localStorage.getItem('Profile_Data')).payload.uid)
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

    const handleImg = async (e) => {
        // setSelectedFile(e.target.files[0])
        // console.log(e.target.files[0])

        var datas = new FormData();
        datas.append('image', e.target.files[0])
        const { data } = await Axios.post('/upload/assets/image', datas);
        setImage(data.payload)
    }
    // const [selectedFile, setSelectedFile] = React.useState(null);


    const handleRating = (rate) => {
        setRating(rate / 20)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('userId', JSON.parse(localStorage.getItem('Profile_Data')).payload.uid)
        formData.append('title', initialState.title)
        formData.append('description', initialState.description)
        formData.append('reviewCount', rating)
        formData.append('photoUrl', image)
        formData.append('bookingName', "Some Bookings (ME)")
        formData.append('bookingPhotoUrl', "https://asdasd.sgp1.cdn.digitaloceanspaces.com/assets/2e87ee13-3a12-4cf9-8f1a-95ed414a440crn_image_picker_lib_temp_bf9b9b9f-832d-48a6-ad00-19abebdae1ac.jpg")

        // View the formData
        // for (const value of formData.values()) {
        //     console.log(value);
        // }

        const { data } =await Axios.post('customer/add/review', formData);
        console.log({ data })

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
                                <Form onSubmit={handleSubmit}>
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
                                        <Input onChange={handleImg} name='photoURL' type="file" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="submit" value="Submit" className="review-btn" />

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
