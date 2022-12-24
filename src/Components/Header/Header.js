import {faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <h3> <FontAwesomeIcon icon={faProjectDiagram} /> Programming Contest Club</h3>
            <h4>Select your level and Jump to code.</h4>
        </div>
    );
};

export default Header;