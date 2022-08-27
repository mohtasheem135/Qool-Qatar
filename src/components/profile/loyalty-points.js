import React, { useEffect, useState } from 'react';

const data = [
    {
        id: 1,
        image: require('../../assets/images/a6.png'),
        title: "Activity Name",
        meta: "Review",
        points: "+10"
    },
    {
        id: 2,
        image: require('../../assets/images/a7.png'),
        title: "Activity Name",
        meta: "Used For Booking",
        points: "-50"
    },
    {
        id: 3,
        image: require('../../assets/images/a8.png'),
        title: "Activity Name",
        meta: "Review + Photo",
        points: "+30"
    },
    {
        id: 4,
        image: require('../../assets/images/a9.png'),
        title: "Activity Name",
        meta: "Review",
        points: "+10"
    },
]

const received = data.map(r => {
    return (
        <div className="received-box">
            <div className="left1">
                <img src={r.image} alt="activity" />
                <div>
                    <p className="title1">{r.title}</p>
                    <p className="meta">{r.meta}</p>
                </div>
            </div>
            <p className="points">{r.points}</p>
        </div>
    )
})

const LoyaltyPoints = () => {
    const [data, setData] = useState('');
    useEffect(() => {
        // console.log(JSON.parse(localStorage.getItem('Profile_Data')).payload.coinHistory)
        // console.log(JSON.parse(localStorage.getItem('Profile_Data')).payload)
        setData(JSON.parse(localStorage.getItem('Profile_Data')).payload)
    }, [])
    return (
        <div className="loyalty-points">
            <h3>Loyalty Points</h3>
            <div className="total-points">
                <img src={require('../../assets/images/Group102.png')} alt="crown" />
                <div>
                    <p className="txt1">Points</p>
                    <p className="txt2">{data.coin}</p>
                </div>
            </div>
            <div className="received-from">
                <p className="title">Received From</p>
                <div className="received-sub">
                    {received}
                    {/* {data.coinHistory.map((r) => {
                        return (
                            <div className="received-box">
                                <div className="left1">
                                    <img src={require('../../assets/images/a9.png')} alt="activity" />
                                    <div>
                                        <p className="title1">Activity Name</p>
                                        <p className="meta">Review</p>
                                    </div>
                                </div>
                                {r.isIncrement==true ? <p className="points">+{r.pointChange}</p> : <p className="points">-{r.pointChange}</p>}
                                
                            </div>
                        )

                    })} */}
                </div>
            </div>
        </div>
    )
}

export default LoyaltyPoints;
