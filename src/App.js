import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import BeerDetails from './pages/BeerDetails';
import Error from './pages/Error';

function App() {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/details/:slug' component={BeerDetails} />
                <Route component={Error} />
            </Switch>
        </>
    );
}

export default App;
