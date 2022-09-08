import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import dateFormat from "dateformat";

const data = [
	{
		id: 1,
		image: require('../../assets/images/Rectangle156.png'),
		title: "Doha:Private 4 Hours City Tour",
        date: "Monday, 14 March",
        time: "1:00 PM"
	},
	{
		id: 2,
		image: require('../../assets/images/Rectangle156.png'),
		title: "Doha:Private 4 Hours City Tour",
		date: "Monday, 14 March",
        time: "1:00 PM"
	},
]

const booking = (data) => {
    return data?.map(b => {
        return(
            <div className="booking-box">
                <img src={b?.packageId?.photoUrl} alt="booking" width="220" height="220" />
                <div className="booking-info">
                    <p className="txt1">{b?.packageName}</p>
                    <p className="date"><img src={require('../../assets/images/Calendar.png')} alt="calendar" /> {dateFormat(b?.eventDate, "DDD, mmm dS, yyyy")}</p>
                    <p className="time">{b?.packageId?.hour && b?.packageId?.hour + `hpurs`} </p>
                </div>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        )
    });
};

const MyBookings = () => {
    
    const bookings = JSON.parse(localStorage.getItem('Profile_Data'))?.payload?.bookings;
    return (
        <div className="">
            <h3>My Bookings</h3>
            <div className="upcoming-box">
                <p className="title1">Upcoming Bookings</p>
                {booking(bookings)}
            </div>
        </div>
    )
}

export default MyBookings;
