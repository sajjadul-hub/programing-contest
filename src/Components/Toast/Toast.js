import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => {
    toast("You are the highest rank in the world!!");
}

function Toast() {

    return (
        <div>
            <button className='btn-check' onClick={notify}>Check your Rank!!</button>
            <ToastContainer />
        </div>
    );
}

export default Toast;