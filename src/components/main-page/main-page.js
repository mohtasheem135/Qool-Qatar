import React, { Fragment } from 'react';
const Header = React.lazy(()=> import('./header'));
const Footer = React.lazy(()=> import('./footer'));

const MainPage = ({children}) => {
    return (
        <Fragment>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </Fragment>
    )
}

export default MainPage;
