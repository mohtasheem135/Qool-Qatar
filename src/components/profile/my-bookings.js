import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

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

const booking = data.map(b => {
    return(
        <div className="booking-box">
            <img src={b.image} alt="booking" />
            <div className="booking-info">
                <p className="txt1">{b.title}</p>
                <p className="date"><img src={require('../../assets/images/Calendar.png')} alt="calendar" /> {b.date}</p>
                <p className="time">{b.time}</p>
            </div>
            <FontAwesomeIcon icon={faChevronRight} />
        </div>
    )
})

const MyBookings = () => {
    return (
        <div className="">
            <h3>My Bookings</h3>
            <div className="upcoming-box">
                <p className="title1">Upcoming Bookings</p>
                {booking}
            </div>
        </div>
    )
}

export default MyBookings;
