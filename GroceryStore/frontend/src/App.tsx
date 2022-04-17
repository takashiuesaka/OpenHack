import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout';
import { Home } from './pages/Home';
import { Signup } from './pages/signup'
import { Login } from './pages/login'
import { Checkout } from './pages/Checkout'
// import { FetchData } from './components/FetchData';
// import { Counter } from './components/Counter';
import { ShoppingCartProvider } from './components/ShoppingCartState'

import './custom.css'

const App: React.VFC = () => {
    return (
        <ShoppingCartProvider>
            <Layout>
                <Route exact={true} path='/' component={Home} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/checkout' component={Checkout} />
                {/* <Route path='/counter' component={Counter} /> */}
                {/* <Route path='/fetch-data' component={FetchData} /> */}
            </Layout>
        </ShoppingCartProvider>
    );
}

export default App;