import React, { useEffect } from 'react';
import { Col, Container, Form, Row } from 'reactstrap';

import {useSearchParams} from "react-router-dom";

const MainPage = React.lazy(() => import('../components/main-page/main-page'));
const Activities = React.lazy(() => import('../components/list-of-activities/activities'));


const ListOfActivitiesNearBy = () => {
                   
const [searchParams, setSearchParams] = useSearchParams();
console.log("id", searchParams.get("id"));
    useEffect(() => {
        document.title = "List Of Activities - Qool Qatar";
        getQueryParam();
    }, []);

    function getQueryParam () {
 
    }


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
