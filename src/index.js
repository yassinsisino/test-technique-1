import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import cart from 'reducers/cart';
import hotels from 'reducers/hotels';

import Home from './routes/Home/Home';
import Checkout from './routes/Checkout/Checkout';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({ cart, hotels }), 
    composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/checkout" exact component={Checkout} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
