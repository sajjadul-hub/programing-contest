import React from 'react';

const TimeBreaker = ({ timebreak, clickHandlerToAddBreakTime }) => {
    
    return (
        <div>
            <button onClick={() => clickHandlerToAddBreakTime(timebreak)}>{timebreak.time}</button>
        </div>
    );
};

export default TimeBreaker;