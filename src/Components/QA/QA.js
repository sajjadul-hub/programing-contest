import React from 'react';
import './QA.css'
const QA = () => {
    return (
        <div className='qa'>
            <ol>
                <li>
                    How does react work?
                </li>
                <code>React work</code><br></br>

                <strong>
                    React creates a VIRTUAL DOM in memory. Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.
                </strong>

                <li>Write a short note different between props and state</li>
                <code>props vs state</code><br />
                <strong>
                    props are variables passed to it by its parent component<br />
                    props can pass a function,event handler,data and object.<br />
                    state can change data from user interact.State changes can be asynchronous.
                </strong>

                <li>
                    useEffect different use except data load.
                </li>
                <code>useEffect</code><br />

                <strong>
                    componentDidMount<br />
                    componentDidUpdate<br />
                    componentWillUnmount
                </strong>
            </ol>
        </div>
    );
};

export default QA;