import React from 'react';
import { Button } from 'reactstrap';

const DealClassCard = (props) => {
    return(
        <div className="pick-box deal-box">
            <a href="/">
                <img src={props.image} alt="pick" />
            </a>
            <div className="like-box"><img src={require('../../assets/images/heart.png')} alt="heart" /></div>
            <p className="pick-title">{props.title}</p>
            <p className="pick-des">{props.location}</p>
            <p><span className="offer-txt">{props.offer}</span> <span className="txt1">{props.discount}</span></p>
            <p className="start-from">Starts from</p>
            <div className="price-box">
                <p><span className="main-price">{props.price}</span><span className="txt1">/Per Person</span></p>
                <Button>Book</Button>
            </div>
        </div>
    )
}

export default DealClassCard;