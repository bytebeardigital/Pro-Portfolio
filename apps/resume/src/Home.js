import React from 'react';
import Header from './components/layouts/header.js';
import Footer from './components/layouts/footer.component.js';
import Admin from "./pages/Admin";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import { Switch, Route } from "react-router-dom";

function Home(props) {
    return (
        <div className="page-container">
            <Header/>
            <Switch>
                <Route path="/" exact component={About}></Route>
                <Route path="/resume" component={Resume}></Route>
                <Route path="/portfolio" component={Portfolio}></Route>
                <Route path="/admin" component={Admin} ></Route>

            </Switch>
            <Footer/>
        </div>
    )
}

export default Home
