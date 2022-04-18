import React from 'react';
import './NotFound.css'
import notfound from '../../images/Others/notfound.jpg'

const NotFound = () => {
    return (
        <div className='not-found-container'>
            <img className='not-found-img' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;