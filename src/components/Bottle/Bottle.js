import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './Bottle.css';

const Bottle = ({item}) => {
    const {name, beerStyle, ibu, abv, status, slug} = item;

    return (
        <article className='bottle__card'>
            <h1 className={'bottle__title'}>{name}</h1>
            <h4>{status}</h4>
            <p>
                <strong>style:</strong> {beerStyle}
            </p>
            <span>
                <strong>ibu:</strong> {ibu}{' '}
            </span>
            <span>
                <strong>abv:</strong> {abv}{' '}
            </span>
            <div>
                <Link to={`/details/${slug}`}>
                    <button className={'button'}>Show details</button>
                </Link>
            </div>
        </article>
    );
};

Bottle.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        beerStyle: PropTypes.string.isRequired,
        ibu: PropTypes.string.isRequired,
        abv: PropTypes.string.isRequired
    })
};

export default Bottle;
