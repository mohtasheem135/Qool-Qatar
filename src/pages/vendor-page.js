import React, { useEffect} from 'react';
const MainPage = React.lazy(()=> import('../components/main-page/main-page'));
const VendorBlock = React.lazy(()=> import('../components/vendor-page/vendor-block'));
const RecommendedPackages = React.lazy(()=> import('../components/vendor-page/recommended-packages'));
const Reviews = React.lazy(()=> import('../components/vendor-page/reviews'));

const VendorPage = () => {
    useEffect(() => {
        document.title = "Vendor Page - Qool Qatar";
      }, []);

    return (
        <MainPage>
            <VendorBlock />
            <RecommendedPackages />
            <Reviews />
        </MainPage>
    )
}

export default VendorPage;
