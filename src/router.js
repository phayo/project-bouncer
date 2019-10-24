import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Product from "./pages/Product/Product";
import { Header, Footer } from './components/components';
import NavBar from './components/NavBar';


export default function AppRouter() {
    return (
        <Router>
            <Header/>
            <NavBar/>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/product" component={Product} />
            <Footer/>
        </Router>
    )
}