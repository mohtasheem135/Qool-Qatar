import React from 'react';
const MainPage = React.lazy(()=> import('../components/main-page/main-page'));
const ExperienceWorld = React.lazy(()=> import('../components/home/experience'));
const LetExplore = React.lazy(()=> import('../components/home/let-explore'));
const TopPicks = React.lazy(()=> import('../components/home/top-picks'));
const BestDeals = React.lazy(()=> import('../components/home/best-deals'));
const ActivitiesNear = React.lazy(()=> import('../components/home/activities-near'));
const LuxuryPicks = React.lazy(()=> import('../components/home/luxury-picks'));
const UpcomingEvents = React.lazy(()=> import('../components/home/upcoming-events'));

const Home = () =>{

    return(
        <MainPage>
            <ExperienceWorld />
            <LetExplore />
            <TopPicks />
            <BestDeals />
            <ActivitiesNear />
            <LuxuryPicks />
            <UpcomingEvents />
        </MainPage>
    )
}

export default Home;