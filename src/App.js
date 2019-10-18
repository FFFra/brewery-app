import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import BeerForm from './components/Beerform/Beerform';
import BeerDetails from './pages/BeerDetails/BeerDetails';

function App() {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/details/:slug' component={BeerDetails} />
                {/* <Route exact path='/add' component={BeerForm} /> */}
                <Route component={Error} />
            </Switch>
        </>
    );
}

export default App;
