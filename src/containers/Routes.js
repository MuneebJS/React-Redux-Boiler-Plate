
import React, { Component } from 'react';
import { Route, Router, BrowserRouter } from 'react-router-dom';
import App from './App';
import ProductDetails from './ProductDetails';
// import createBrowserHistory from 'history/createBrowserHistory'

// const history = createBrowserHistory()

class Routers extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={App} />
                    <Route exact path="/details" component={ProductDetails} />
                </div>
            </BrowserRouter>
        )
    }
}

export default Routers;