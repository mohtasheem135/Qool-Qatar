import React, { useEffect } from 'react';
import { Col, Container, Form, Row } from 'reactstrap';
const MainPage = React.lazy(() => import('../components/main-page/main-page'));
const Activities = React.lazy(() => import('../components/list-of-activities/activities'));


const ListOfActivitiesNearBy = () => {
    useEffect(() => {
        document.title = "List Of Activities - Qool Qatar";
    }, []);


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
                        
                        <Col lg={9}>
                            <Activities />
                        </Col>
                    </Row>
                </Container>
            </section>
        </MainPage>
    )
}

export default ListOfActivitiesNearBy;
