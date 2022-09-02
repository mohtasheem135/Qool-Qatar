import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';

const data = [
	{
		id: 1,
		image: require('../../assets/images/w1.png'),
		title: "Falcon Tours",
        star: "25",
        category: "Adventure"
	},
	{
		id: 2,
		image: require('../../assets/images/w2.png'),
		title: "Matrix Tours & Travels",
		star: "25",
        category: "Luxury"
	},
    {
		id: 3,
		image: require('../../assets/images/w2.png'),
		title: "Qatar Tours LTD",
		star: "25",
        category: "Luxury"
	},
]

const wishlists = () => {
    const wishlists = JSON.parse(localStorage.getItem('Profile_Data'))?.payload?.wishlists;
    return (
        <>
        {
        wishlists?.map(wishlist => {
            if(wishlist.packageId) {
                return (
                    <div className="col-lg-4">
                    <img src={wishlist.packageId.photoUrl} alt="wishlist" className='photoUrl'/>
                    <div className="red-heart">
                        <img src={require('../../assets/images/red-heart.png')} alt="heart" />
                    </div>
                    <p className="my-txt">{wishlist.packageId.vendorName}</p>
                    <p className="my-star"><img src={require('../../assets/images/Group3.png')} alt="star" /> 6 reviews</p>
                    <p className="my-cat">Adventure</p>
                </div>
                )
            }
        })}
        </>
    )
    }
    // return(
    //     <div className="col-lg-4">
    //         <img src={w.image} alt="wishlist" />
    //         <div className="red-heart">
    //             <img src={require('../../assets/images/red-heart.png')} alt="heart" />
    //         </div>
    //         <p className="my-txt">{w.title}</p>
    //         <p className="my-star"><img src={require('../../assets/images/Group3.png')} alt="star" /> {w.star} reviews</p>
    //         <p className="my-cat">{w.category}</p>
    //     </div>
    // )
// }

const MyWishlist = () => {
    useEffect(() => {
        // console.log(JSON.parse(localStorage.getItem('Profile_Data')).payload.wishlists)
    }, [])
    return (
        <div className="my-wishlist">
            <h3>My Wishlist</h3>
            <Row>
                {wishlists()}
            </Row>
        </div>
    )
}

export default MyWishlist;
