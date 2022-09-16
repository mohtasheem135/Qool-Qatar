import React from 'react';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const DealClassCard = (props) => {
  const navigate = useNavigate();

    const selectedPackage = data => {
        localStorage.setItem("selectedPackageData", JSON.stringify(data));
        navigate("/package-page");
        window.location.reload();
    }
    return(
        <div className="pick-box deal-box place-box">
            <div className="place1">   
                <img src={props.photoUrl} alt="pick" width="120" height="160" />
            </div>
          <div className="place2">
                <p className="pick-des">{props.name}</p>
                <p className="pick-des">{props.address}</p>
                <p><span className="offer-txt">{props.offer}</span> <span className="txt1">{props.discount}</span></p>
                <p className="start-from">Starts from</p>
                <div className="price-box">
                    <p><span className="main-price">QAR {props.price}</span><span className="txt1">/Per Person</span></p>
                </div>
                <Button onClick={() => selectedPackage(props)}>Book</Button>
            </div>
        </div>
    )
}

export default DealClassCard;