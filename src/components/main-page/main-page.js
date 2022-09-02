import React, { Fragment } from 'react';
const Header = React.lazy(()=> import('./header'));
const Footer = React.lazy(()=> import('./footer'));

const MainPage = ({data,children}) => {
    return (
        <Fragment>
            <Header data={data}/>
            <main>
                {children}
            </main>
            <Footer />
        </Fragment>
    )
}

export default MainPage;
