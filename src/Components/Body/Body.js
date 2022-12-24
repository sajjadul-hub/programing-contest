import React, { useEffect, useState } from 'react';
import CalculatingCart from '../CalculatingCart/CalculatingCart';
import SingleCart from '../SingleCart/SingleCart';
import './Body.css'

const Body = () => {
    const [informations, setInformation] = useState([]);

    const [count, setCount] = useState([])

    useEffect(() => {
        fetch('information.json').then(res => res.json()).then(data => setInformation(data))
    }, [])

    const clickHandlerToSelect = (information) => {
        // console.log(information);
        const newCount = [...count, information];
        setCount(newCount);
    }
    
    return (
        <div className='container'>
            <div className='cart-container'>
                {
                    informations.map(information => <SingleCart
                        key={information.id}
                        information={information}
                        clickHandlerToSelect={clickHandlerToSelect}
                    >

                    </SingleCart>)
                }
            </div>

            <div className='calculating-container'>
                {
                    <CalculatingCart
                        count={count}
                    >

                    </CalculatingCart>
                }
            </div>
        </div>
    );
};

export default Body;