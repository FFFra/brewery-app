import React from 'react';
import './Title.css';

const Title = props => {
    return (
        <div className={'title__container'}>
            <h1 className={'title__text'}>{props.title}</h1>
        </div>
    );
};
export default Title;
