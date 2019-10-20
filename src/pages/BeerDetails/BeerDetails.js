import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {BeerContext} from '../../context';
import './BeerDetails.css';
export default class BeerDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug
        };
    }
    static contextType = BeerContext;

    render() {
        const {getBottleDetail} = this.context;
        const bottle = getBottleDetail(this.state.slug);
        console.log(bottle);

        if (!bottle) {
            return (
                <div>
                    <h3>Hold on, we are looking for your beer...</h3>
                    <Link to='/'>Back</Link>
                </div>
            );
        }
        const {name, description, status, beerStyle, ibu, abv} = bottle;
        return (
            <div className='details__container'>
                <h1>{name}</h1>
                <p>{beerStyle}</p>
                <h3>{status}</h3>
                <p>{description}</p>
                <span>ibu: {ibu}</span>
                <span>abv: {abv}</span>
            </div>
        );
    }
}
