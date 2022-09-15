
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
const MainPage = React.lazy(()=> import('../components/main-page/main-page'));
const App1 = React.lazy(()=> import('../components/book-package/stepper'));

const BookPackage = () => {
    const [data, setData] = useState();

    useEffect(() => {
        document.title = "Book Package - Qool Qatar";
        setData(JSON.parse(localStorage.getItem("slotsAvailable")));
      }, []);

    return (
        <MainPage>
            <section className="package-title">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <ul className="breadcrumb">
                                <li>Adventure</li>
                                <li><img src={require('../assets/images/chevron-right.png')} alt="rightarrow"/></li>
                                <li>List of Vendors</li>
                                <li><img src={require('../assets/images/chevron-right.png')} alt="rightarrow"/></li>
                                <li>Package</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="page-title main-package">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h1>Book Package</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg={12}>
                           <App1 data={data} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </MainPage >
    )
}

export default BookPackage;
