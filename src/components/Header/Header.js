import React from 'react';
import './Header.css';

const Header = props => {
    return (
        <div className={'banner__hero'}>
            <h1 className={'banner__title'}>{props.title}</h1>
        </div>
    );
};

export default Header;
