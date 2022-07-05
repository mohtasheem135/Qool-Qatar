import React, { useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Nav, Tab } from 'react-bootstrap';
const MainPage = React.lazy(()=> import('../components/main-page/main-page'));
const EditProfile = React.lazy(()=> import('../components/profile/edit-profile'));
const AccountSettings = React.lazy(()=> import('../components/profile/account-settings'));
const MyReviews = React.lazy(()=> import('../components/profile/my-reviews'));
const MyWishlist = React.lazy(()=> import('../components/profile/my-wishlist'));
const MyBookings = React.lazy(()=> import('../components/profile/my-bookings'));
const LoyaltyPoints = React.lazy(()=> import('../components/profile/loyalty-points'));
const Language = React.lazy(()=> import('../components/profile/language'));
const Currency = React.lazy(()=> import('../components/profile/currency'));
const NotiFications = React.lazy(()=> import('../components/profile/notifications'));

const ProfilePage = () => {
    useEffect(() => {
        document.title = "Edit Profile - Qool Qatar";
      }, []);

    return (
        <MainPage>
            <section className="page-title">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h1>Your Profile</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="profile-tabs">
                <Container>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="tab1">
                    <Row>
                        <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="tab1">Edit Profile</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tab2">Account Settings</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tab3">My Reviews</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tab4">My Wishlist</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tab5">My Bookings</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tab6">Loyalty Points</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tab7">Language</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tab8">Currency</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tab9">Notifications</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="tab1">
                                <EditProfile />
                            </Tab.Pane>
                            <Tab.Pane eventKey="tab2">
                                <AccountSettings />
                            </Tab.Pane>
                            <Tab.Pane eventKey="tab3">
                                <MyReviews />
                            </Tab.Pane>
                            <Tab.Pane eventKey="tab4">
                                <MyWishlist />
                            </Tab.Pane>
                            <Tab.Pane eventKey="tab5">
                                <MyBookings />
                            </Tab.Pane>
                            <Tab.Pane eventKey="tab6">
                                <LoyaltyPoints />
                            </Tab.Pane>
                            <Tab.Pane eventKey="tab7">
                                <Language />
                            </Tab.Pane>
                            <Tab.Pane eventKey="tab8">
                                <Currency />
                            </Tab.Pane>
                            <Tab.Pane eventKey="tab9">
                                <NotiFications />
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                    </Tab.Container>
                </Container>
            </section>
        </MainPage>
    )
}

export default ProfilePage;
