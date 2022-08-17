import React, { useEffect, useState} from 'react';
const MainPage = React.lazy(()=> import('../components/main-page/main-page'));
const VendorBlock = React.lazy(()=> import('../components/vendor-page/vendor-block'));
const RecommendedPackages = React.lazy(()=> import('../components/vendor-page/recommended-packages'));
const Reviews = React.lazy(()=> import('../components/vendor-page/reviews'));

const VendorPage = () => {
    const [data, setData] = useState('')
    useEffect(() => {
        document.title = "Vendor Page - Qool Qatar";

        fetch(`https://qoolqatar.com/api/v1/admin/get/single/vendor/${localStorage.getItem('vendorOage_aboutEvent')}`).then((response1) => response1.json())
        .then((data) => setData(data));
      }, []);

      console.log(localStorage.getItem('vendorOage_aboutEvent'))

    return (
        <MainPage>
            <VendorBlock data={data} />
            <RecommendedPackages />
            <Reviews />
        </MainPage>
    )
}

export default VendorPage;
