import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import '../Body/Body.css';
import './CalculatingCart.css'
import TimeBreaker from '../TimeBreaker/TimeBreaker';
import Toast from '../Toast/Toast';

const CalculatingCart = ({ count}) => {
    // console.log(count);
    let total = 0;
    for (const information of count) {
        total = total + information.time;
    }

    const [timeBreaker, setTimeBreaker] = useState([]);

    const [breakTime,setBreakTime] = useState([])
    useEffect(() => {
        fetch('timebreak.json').then(res => res.json()).then(data => setTimeBreaker(data))
    }, [])

    let breaktime = 0;
    const clickHandlerToAddBreakTime = (timebreak) => {
        const newBreak = [...breakTime, timebreak];
        setBreakTime(newBreak);
        // console.log(newBreak);
    }


    return (
        <div className='cart-inside-part'>

            <div className="profile-section">
                <img className='profile' src="https://raw.githubusercontent.com/UhaiMong/images/master/profile/student-1.png" alt="Profile" />
                <div className='name-address'>
                    <h4>Markjukerburk</h4>
                    <span> <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon> USA,California</span>
                </div>
            </div>

            <div className='time-container'>
                <h4>World Rank: 1</h4>
            </div>

            <h3>Add a break time: </h3>
            <div className='time-container breaker'>
                {
                    timeBreaker.map(timebreak => <TimeBreaker
                        key={timebreak.id}
                        timebreak={timebreak}
                        clickHandlerToAddBreakTime ={clickHandlerToAddBreakTime}
                    >

                    </TimeBreaker>)
                }

            </div>
            <h3>Contest Details</h3>
            <div className='time-container'>
                <h4>Time count: {total} min</h4>
            </div>

            <div className='time-container'>
                <h4>Break Time: {breaktime}</h4>
            </div>

            {/* Toastify */}

            <Toast></Toast>
        </div>
    );
};

export default CalculatingCart;