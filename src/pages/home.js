import React, { useEffect, useState } from 'react';
import Axios from 'axios';
const MainPage = React.lazy(() => import('../components/main-page/main-page'));
const ExperienceWorld = React.lazy(() => import('../components/home/experience'));
const LetExplore = React.lazy(() => import('../components/home/let-explore'));
const TopPicks = React.lazy(() => import('../components/home/top-picks'));
const BestDeals = React.lazy(() => import('../components/home/best-deals'));
const ActivitiesNear = React.lazy(() => import('../components/home/activities-near'));
const LuxuryPicks = React.lazy(() => import('../components/home/luxury-picks'));
const UpcomingEvents = React.lazy(() => import('../components/home/upcoming-events'));

const Home = () => {

    const [data, setData] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async function (position) {

            const { data } = await Axios.get(`/customer/home?lat=${position.coords.latitude}&lng=${position.coords.longitude}`);
            
            if (data.error) {
                console.log("error")
            } else {
                setData(data);
            }
        });
        
        let keysToRemove = ["packageCategoryId", "categoryName", "selectedPackageData", "packageData", "slotsAvailable"];

        keysToRemove.forEach(k =>
            localStorage.removeItem(k));
    }, []);



    return (
        <MainPage data={data?.payload}>
            <ExperienceWorld />
            <LetExplore data={data} />
            <TopPicks data={data} />
            <BestDeals data={data}/>
            <ActivitiesNear data={data} />
            <LuxuryPicks data={data} />
            <UpcomingEvents data={data} />
        </MainPage>
    )
}

export default Home;