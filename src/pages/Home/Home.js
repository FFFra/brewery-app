import React, {useContext, useState} from 'react';

import './Home.css';
import {BeerContext} from '../../context';
import BeerForm from '../../components/BeerForm/BeerForm';
import Bottle from '../../components/Bottle/Bottle';
import Title from '../../components/Title/Title';
import Loading from 'react-spinners/ClipLoader';

const Home = () => {
    let {bottles, loading} = useContext(BeerContext);
    let [form, showForm] = useState(false);

    bottles = bottles.map(bottle => {
        return <Bottle key={bottle.id} item={bottle} />;
    });

    function showFormHandler() {
        showForm(!form);
    }

    return (
        <>
            <Title title='Beers available' />
            <section>
                <button className={'button'} onClick={() => showFormHandler()}>
                    {form ? 'Close' : 'Add'}
                </button>
                <div>{form ? <BeerForm data={bottles} /> : ''}</div>
            </section>
            <section className='bottle__section'>
                {loading ? (
                    <div className='loading__container'>
                        <Loading sizeUnit={'px'} size={120} color={'#f5a91'} />
                    </div>
                ) : (
                    bottles
                )}
            </section>
        </>
    );
};

export default Home;
