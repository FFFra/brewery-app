import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Loading from 'react-spinners/ClipLoader';

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

        if (!bottle) {
            return (
                <div className='loading__container'>
                    <h3>Hold on, we are looking for your beer...</h3>

                    <Loading sizeUnit={'px'} size={120} color={'#f5a91'} />
                    <Link className='button' to='/'>
                        Back
                    </Link>
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
                <Link className='button' to='/'>
                    Back
                </Link>
            </div>
        );
    }
}
