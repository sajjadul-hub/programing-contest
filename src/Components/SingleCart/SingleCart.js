import React from 'react';
import './SingleCart.css'

const SingleCart = ({ information, clickHandlerToSelect }) => {
    // console.log(information);
    const { img_link, title, description, time } = information
    return (
        <div className='cart'>
            <div>
                <img src={img_link} alt="/img" />
                <h2>{title}</h2>
                <p>{description}</p>
                <strong>Time: {time} min</strong>
            </div>
            <button onClick={() => clickHandlerToSelect(information)} className='btn-select'>Select</button>
        </div>
    );
};

export default SingleCart;