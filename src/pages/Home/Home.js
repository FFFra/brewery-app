import React, {useContext} from 'react';

import {BeerContext} from '../../context';
import Loading from '../../components/Loading/Loading';
import Bottle from '../../components/Bottle/Bottle';

const Home = () => {
    let {bottles, loading} = useContext(BeerContext);

    bottles = bottles.map(bottle => {
        return <Bottle key={bottle.id} item={bottle} />;
    });

    return (
        <section>
            <div>{loading ? <Loading /> : bottles}</div>
        </section>
    );
};

export default Home;
