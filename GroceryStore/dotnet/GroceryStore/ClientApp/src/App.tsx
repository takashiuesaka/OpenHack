import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import { Home } from './pages/Home';
import { Signup } from './pages/signup'
import { Login } from './pages/login'
import { Checkout } from './pages/Checkout'
// import { FetchData } from './components/FetchData';
// import { Counter } from './components/Counter';
import { ShoppingCartProvider } from './components/ShoppingCartState'

import './custom.css'

const App = () => {
    return (
        <ShoppingCartProvider>
            <Layout>
                <Route exact path='/' component={Home} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/login' component={Login} />
                <Route path='/checkout' component={Checkout} />
                {/* <Route path='/counter' component={Counter} /> */}
                {/* <Route path='/fetch-data' component={FetchData} /> */}
            </Layout>
        </ShoppingCartProvider>
    );
}

export default App;