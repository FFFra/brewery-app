import React from 'react';
import {Link} from 'react-router-dom';
import './Error.css';

const Error = () => {
    return (
        <div className={'error__container'}>
            <h1 className={'error__text'}>Error 404 - Page not found</h1>
            <div>
                <Link className='button' to='/'>
                    Back
                </Link>
            </div>
        </div>
    );
};

export default Error;
