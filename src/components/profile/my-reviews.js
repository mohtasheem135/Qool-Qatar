import React from 'react';

const data = [
	{
		id: 1,
		image: require('../../assets/images/Ellipse1.png'),
		title: "Jane Cooper",
        star: "5.0",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque ullamcorper pellentesque nec vitae."
	},
	{
		id: 2,
		image: require('../../assets/images/Ellipse1.png'),
		title: "Jane Cooper",
		star: "5.0",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque ullamcorper pellentesque nec vitae."
	},
]

const reviews = data.map(r => {
    return(
        <div className="col-lg-7 review-box">
            <div className="d-flex align-content-center mb-3">
                <img src={r.image} alt="wishlist" className="user-img" />
                <div>
                    <p className="my-txt">{r.title}</p>
                    <p className="my-star"><img src={require('../../assets/images/Group3.png')} alt="star" /> {r.star}</p>
                </div>
            </div>
            <p className="">{r.description}</p>
        </div>
    )
})

const MyReviews = () => {
    return (
        <div className="my-reviews">
            <h3>My Reviews</h3>
            <div>
                {reviews}
            </div>
        </div>
    )
}

export default MyReviews;
