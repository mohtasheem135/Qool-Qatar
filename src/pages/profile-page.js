import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Nav, Tab, Tabs } from 'react-bootstrap';
import { useSearchParams, NavLink } from 'react-router-dom';
const MainPage = React.lazy(() => import('../components/main-page/main-page'));
const EditProfile = React.lazy(() => import('../components/profile/edit-profile'));
const AccountSettings = React.lazy(() => import('../components/profile/account-settings'));
const MyReviews = React.lazy(() => import('../components/profile/my-reviews'));
const MyWishlist = React.lazy(() => import('../components/profile/my-wishlist'));
const MyBookings = React.lazy(() => import('../components/profile/my-bookings'));
const LoyaltyPoints = React.lazy(() => import('../components/profile/loyalty-points'));
const Language = React.lazy(() => import('../components/profile/language'));
const Currency = React.lazy(() => import('../components/profile/currency'));
const NotiFications = React.lazy(() => import('../components/profile/notifications'));

const ProfilePage = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        document.title = "Edit Profile - Qool Qatar";
        let currentTab = searchParams.get('tab')
        // console.log("ggjj" + currentTab)
        if (currentTab) {

            setActiveTab(currentTab)
        }
    }, []);
    const [activeTab, setActiveTab] = useState('')


    const navlink = [
        { name: 'Edit Profile', key: 'editProfile' },
        // { name: 'Account Settings', key: 'accountSettings' },
        { name: 'My Reviews', key: 'myReviews' },
        { name: 'My Wishlist', key: 'myWishlist' },
        { name: 'My Bookings', key: 'myBookings' },
        { name: 'Loyalty Points', key: 'loyaltyPoints' },
        { name: 'Language', key: 'language' },
        { name: 'Currency', key: 'currency' },
        { name: 'Notifications', key: 'notifications' },
        // { name: 'Log Out', key: 'logout' },
    ]

    const handleClick = (e) => {
        // e.preventDefault()
        // localStorage.removeItem('otp_signIn')
        // localStorage.removeItem('userID')
        // localStorage.setItem('@auth_token', null);
        localStorage.clear();
        window.location.reload()
    }

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
                    {/* <Tab.Container id="left-tabs-example" defaultActiveKey="tab1"> */}
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                {navlink.map((e) =>
                                    <Nav.Item key={e.key}>
                                        <NavLink className={e.key == activeTab && 'activeLink_nav'} onClick={() => setActiveTab(e.key)} to={{ search: `?tab=${e.key}` }} eventKey={e.key}>{e.name}</NavLink>
                                    </Nav.Item>)}
                                <Nav.Item>
                                    <a href='/' style={{fontSize: "16px", color: '#A2195B', fontWeight: '700' }} onClick={handleClick} >Log Out</a>
                                </Nav.Item>
                                {/* <Nav.Item>
                                        <Nav.Link eventKey="tab2">Account Settings</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="tab3">My Reviews</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="tab4">My Wishlist</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href='?tab=mybookings' eventKey="tab5">My Bookings</Nav.Link>
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
                                    </Nav.Item> */}
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tabs activeKey={activeTab}>
                                {/* <Tab.Content> */}
                                <Tab.Pane eventKey="editProfile">
                                    <EditProfile />
                                </Tab.Pane>
                                <Tab.Pane eventKey="accountSettings">
                                        {/* <AccountSettings /> */}
                                    </Tab.Pane>
                                <Tab.Pane eventKey="myReviews">
                                    <MyReviews />
                                </Tab.Pane>
                                <Tab.Pane eventKey="myWishlist">
                                    <MyWishlist />
                                </Tab.Pane>
                                <Tab.Pane eventKey="myBookings">
                                    <MyBookings />
                                </Tab.Pane>
                                <Tab.Pane eventKey="loyaltyPoints">
                                    <LoyaltyPoints />
                                </Tab.Pane>
                                <Tab.Pane eventKey="language">
                                    <Language />
                                </Tab.Pane>
                                <Tab.Pane eventKey="currency">
                                    <Currency />
                                </Tab.Pane>
                                <Tab.Pane eventKey="notifications">
                                    <NotiFications />
                                </Tab.Pane>
                                <Tab.Pane eventKey="logout">
                                    <NotiFications />
                                </Tab.Pane>
                                {/* </Tab.Content> */}
                            </Tabs>
                        </Col>
                    </Row>
                    {/* </Tab.Container> */}
                </Container>
            </section>
        </MainPage>
    )
}

export default ProfilePage;
