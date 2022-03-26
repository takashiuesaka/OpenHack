import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import { Home } from './components/Home';
import { Checkout } from './components/Checkout'
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './custom.css'

const App = () => {
    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
            <Route path='/fetch-data' component={FetchData} />
            <Route path='/checkout' component={Checkout} />
        </Layout>
    );
}

export default App;