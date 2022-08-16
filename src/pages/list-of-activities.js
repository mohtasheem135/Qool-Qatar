import React, { useEffect } from 'react';
import { FormCheck } from 'react-bootstrap';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel';
import { Col, Container, Form, Row } from 'reactstrap';
const MainPage = React.lazy(() => import('../components/main-page/main-page'));
const Activities = React.lazy(() => import('../components/list-of-activities/activities'));


const ListOfActivities = () => {
    useEffect(() => {
        document.title = "List Of Activities - Qool Qatar";
    }, []);

    // const { data, isLoading, isError, isSuccess } = useQuery('homeData', getHomeData);

    return (
        <MainPage>
            <section>
                <Container>
                    <Row>
                        <Col>
                            <ul className="breadcrumb">
                                <li>Adventure</li>
                                <li><img src={require('../assets/images/chevron-right.png')} alt="rightarrow" /></li>
                                <li>Activities</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col lg={3}>
                            <div className="categories-block">
                                <p className="head">Categories</p>
                                <Form className="cat-form">
                                    {/* {isSuccess == true ? data.payload.map((e) => {
                                        // console.log(e.isTopPicks)
                                        // if (e.isTopPicks == true) {
                                        return (
                                            // <div key={e} className="pick-box">
                                            //     <a href='/destination-page' >
                                            //         <img src={e.photoUrl} alt="pick" />
                                            //     </a>
                                            //     <p className="pick-title">{e.name}</p>
                                            // </div>
                                            <FormCheck>
                                                <FormCheckLabel>{e.name}</FormCheckLabel>
                                                <FormCheckInput></FormCheckInput>
                                            </FormCheck>
                                        )
                                        // }

                                    }) : null} */}
                                    {/* <FormCheck>
                                        <FormCheckLabel>Adventure Tours</FormCheckLabel>
                                        <FormCheckInput></FormCheckInput>
                                    </FormCheck>
                                    <FormCheck>
                                        <FormCheckLabel>Sightseeing</FormCheckLabel>
                                        <FormCheckInput></FormCheckInput>
                                    </FormCheck>
                                    <FormCheck>
                                        <FormCheckLabel>Cultural Tours</FormCheckLabel>
                                        <FormCheckInput></FormCheckInput>
                                    </FormCheck>
                                    <FormCheck>
                                        <FormCheckLabel>Spa & Wellness</FormCheckLabel>
                                        <FormCheckInput></FormCheckInput>
                                    </FormCheck>
                                    <FormCheck>
                                        <FormCheckLabel>Restaurants</FormCheckLabel>
                                        <FormCheckInput></FormCheckInput>
                                    </FormCheck>
                                    <FormCheck>
                                        <FormCheckLabel>Museum Tours</FormCheckLabel>
                                        <FormCheckInput></FormCheckInput>
                                    </FormCheck>
                                    <FormCheck>
                                        <FormCheckLabel>Group Tours</FormCheckLabel>
                                        <FormCheckInput></FormCheckInput>
                                    </FormCheck>
                                    <FormCheck>
                                        <FormCheckLabel>Category name</FormCheckLabel>
                                        <FormCheckInput></FormCheckInput>
                                    </FormCheck>
                                    <FormCheck>
                                        <FormCheckLabel>Category name</FormCheckLabel>
                                        <FormCheckInput></FormCheckInput>
                                    </FormCheck>
                                    <FormCheck>
                                        <FormCheckLabel>Category name</FormCheckLabel>
                                        <FormCheckInput></FormCheckInput>
                                    </FormCheck> */}
                                </Form>
                                {/* <p className="head">Languages</p>
                                <Form className="cat-form">
                                    <FormCheck>
                                        <FormCheckLabel>English (UK)</FormCheckLabel>
                                        <FormCheckInput></FormCheckInput>
                                    </FormCheck>
                                    <FormCheck>
                                        <FormCheckLabel>Arabic</FormCheckLabel>
                                        <FormCheckInput></FormCheckInput>
                                    </FormCheck>
                                    <FormCheck>
                                        <FormCheckLabel>Russian</FormCheckLabel>
                                        <FormCheckInput></FormCheckInput>
                                    </FormCheck>
                                    <FormCheck>
                                        <FormCheckLabel>French</FormCheckLabel>
                                        <FormCheckInput></FormCheckInput>
                                    </FormCheck>
                                </Form> */}
                            </div>
                        </Col>
                        <Col lg={9}>
                            <Activities />
                        </Col>
                    </Row>
                </Container>
            </section>
        </MainPage>
    )
}

export default ListOfActivities;
