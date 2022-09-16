import React, { useEffect, useState} from 'react';
import { Col, Container, Row } from 'reactstrap';
const MainPage = React.lazy(()=> import('../components/main-page/main-page'));
const DealClassCard = React.lazy(()=> import('../components/lightining-deals/deal-class-card'));

// const data = [
// 	{
// 		id: 1,
// 		image: require('../assets/images/unsplash_EdzsUFqHbaY.png'),
// 		title: "Restaurant Name",
// 		location: "Doha, Qatar",
//         offer: "$50",
//         discount: "(10% off)",
//         price: "$25.00"
// 	},
// 	{
// 		id: 2,
// 		image: require('../assets/images/Rectangle16.png'),
// 		title: "Activity Package Name",
// 		location: "Doha, Qatar",
//         offer: "$50",
//         discount: "(10% off)",
//         price: "$25.00"
// 	},
// 	{
// 		id: 3,
// 		image: require('../assets/images/Rectangle17.png'),
// 		title: "Skating Show in Doha Package",
// 		location: "Doha, Qatar",
//         offer: "$50",
//         discount: "(10% off)",
//         price: "$25.00"
// 	},
//     {
// 		id: 4,
// 		image: require('../assets/images/Rectangle18.png'),
// 		title: "Package Name",
// 		location: "Doha, Qatar",
//         offer: "$50",
//         discount: "(10% off)",
//         price: "$25.00"
// 	},
//     {
// 		id: 5,
// 		image: require('../assets/images/unsplash_EdzsUFqHbaY.png'),
// 		title: "Restaurant Name",
// 		location: "Doha, Qatar",
//         offer: "$50",
//         discount: "(10% off)",
//         price: "$25.00"
// 	},
// 	{
// 		id: 6,
// 		image: require('../assets/images/Rectangle16.png'),
// 		title: "Activity Package Name",
// 		location: "Doha, Qatar",
//         offer: "$50",
//         discount: "(10% off)",
//         price: "$25.00"
// 	},
// 	{
// 		id: 7,
// 		image: require('../assets/images/Rectangle17.png'),
// 		title: "Skating Show in Doha Package",
// 		location: "Doha, Qatar",
//         offer: "$50",
//         discount: "(10% off)",
//         price: "$25.00"
// 	},
//     {
// 		id: 8,
// 		image: require('../assets/images/Rectangle18.png'),
// 		title: "Package Name",
// 		location: "Doha, Qatar",
//         offer: "$50",
//         discount: "(10% off)",
//         price: "$25.00"
// 	},
//     {
// 		id: 9,
// 		image: require('../assets/images/unsplash_EdzsUFqHbaY.png'),
// 		title: "Restaurant Name",
// 		location: "Doha, Qatar",
//         offer: "$50",
//         discount: "(10% off)",
//         price: "$25.00"
// 	},
// 	{
// 		id: 10,
// 		image: require('../assets/images/Rectangle16.png'),
// 		title: "Activity Package Name",
// 		location: "Doha, Qatar",
//         offer: "$50",
//         discount: "(10% off)",
//         price: "$25.00"
// 	},
// 	{
// 		id: 11,
// 		image: require('../assets/images/Rectangle17.png'),
// 		title: "Skating Show in Doha Package",
// 		location: "Doha, Qatar",
//         offer: "$50",
//         discount: "(10% off)",
//         price: "$25.00"
// 	},
//     {
// 		id: 12,
// 		image: require('../assets/images/Rectangle18.png'),
// 		title: "Package Name",
// 		location: "Doha, Qatar",
//         offer: "$50",
//         discount: "(10% off)",
//         price: "$25.00"
// 	},
// ]



const LightiningDeals = () => {
	
	const [data, setData] = useState([]);
    useEffect(() => {
        document.title = "Lightining Deals - Qool Qatar";
		setData(JSON.parse(localStorage.getItem("dayDeal")));
      }, []);


	const dealGrid = data && data?.packages?.map((card, index) => {
		return (
			<Col lg={3}>
			<DealClassCard {...card.packageId} />
		</Col>
		)
		});

    return (
        <MainPage className="lighting-box">
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <div className="get-offer">
                            <h1>Get QAR 50% off</h1>
                            <p>Order in 23 Mins : 32 Seconds</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="deal-grid">
                    {dealGrid}
                </Row>
            </Container>
        </MainPage>
    )
}

export default LightiningDeals;
