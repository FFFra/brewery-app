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
                <h1 className={'details__title'}>{name}</h1>
                <h3>{beerStyle}</h3>
                <h4>{status}</h4>
                <p>{description}</p>
                <p>
                    <strong>ibu:</strong> {ibu}
                </p>
                <p>
                    <strong>abv:</strong> {abv}
                </p>
            </div>
        );
    }
}
