import React from 'react';
import { getHomeData } from '../api_utils';
import { useQuery } from 'react-query';
const MainPage = React.lazy(() => import('../components/main-page/main-page'));
const ExperienceWorld = React.lazy(() => import('../components/home/experience'));
const LetExplore = React.lazy(() => import('../components/home/let-explore'));
const TopPicks = React.lazy(() => import('../components/home/top-picks'));
const BestDeals = React.lazy(() => import('../components/home/best-deals'));
const ActivitiesNear = React.lazy(() => import('../components/home/activities-near'));
const LuxuryPicks = React.lazy(() => import('../components/home/luxury-picks'));
const UpcomingEvents = React.lazy(() => import('../components/home/upcoming-events'));

const Home = () => {
    const { data, isLoading, isError, isSuccess } = useQuery('homeData', getHomeData);
    
    return (
        <MainPage>
            <ExperienceWorld />
            <LetExplore data={data} isLoading={isLoading} isError={isError} isSuccess={isSuccess} />
            <TopPicks data={data} isLoading={isLoading} isError={isError} isSuccess={isSuccess} />
            <BestDeals />
            <ActivitiesNear />
            <LuxuryPicks data={data} isLoading={isLoading} isError={isError} isSuccess={isSuccess} />
            <UpcomingEvents data={data} isLoading={isLoading} isError={isError} isSuccess={isSuccess} />
        </MainPage>
    )
}

export default Home;