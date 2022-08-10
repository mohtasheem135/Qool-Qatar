import React from 'react';
// import { getHomeData } from '../api_utils';
// import { useQuery } from 'react-query';
const MainPage = React.lazy(() => import('../components/main-page/main-page'));
const ExperienceWorld = React.lazy(() => import('../components/home/experience'));
const LetExplore = React.lazy(() => import('../components/home/let-explore'));
const TopPicks = React.lazy(() => import('../components/home/top-picks'));
const BestDeals = React.lazy(() => import('../components/home/best-deals'));
const ActivitiesNear = React.lazy(() => import('../components/home/activities-near'));
const LuxuryPicks = React.lazy(() => import('../components/home/luxury-picks'));
const UpcomingEvents = React.lazy(() => import('../components/home/upcoming-events'));

const Home = () => {
    
    const data = JSON.parse(localStorage.getItem('Home_Data')).data

    return (
        <MainPage>
            {/* <h1>JSON.parse(localStorage.getItem('Home_Data')).data.message</h1> */}
            <ExperienceWorld />
            <LetExplore data={data} />
            <TopPicks data={data} />
            <BestDeals />
            <ActivitiesNear data={data} />
            <LuxuryPicks data={data}  />
            <UpcomingEvents />
        </MainPage>
    )
}

export default Home;