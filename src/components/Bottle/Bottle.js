import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Bottle = ({item}) => {
    const {name, beerStyle, ibu, abv, status, slug} = item;

    return (
        <div>
            <h1>{name}</h1>
            <h4>{status}</h4>
            <p>style: {beerStyle}</p>
            <span>ibu: {ibu} </span>
            <span>abv: {abv} </span>

            <Link to={`/details/${slug}`}>
                <button>Show details</button>
            </Link>
        </div>
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
