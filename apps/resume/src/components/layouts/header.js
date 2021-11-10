import React from 'react';
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import Admin from "../../pages/Admin";
import Resume from "../../pages/Resume";
import About from "../../pages/About";
import Portfolio from "../../pages/Portfolio";

import headshot from "../../assets/images/headshot.jpeg";
import { Link, Switch, Route, Routes } from "react-router-dom";

const Header = () => {
    return (
        <>
                    <Navbar className="main-nav" expand="sm">
                <div className="branding d-flex">
        <Link to="/">
                <img src={headshot} alt="logo" className="logo img-fluid"/>
            </Link>
        <div className="branding__meta">
        <p className="author-role">Bryanna Gardner</p>
        <p className="author-title">UI Designer + Developer</p>
        </div>
        </div>
    <Navbar.Toggle className="toggler" aria-controls="basic-navbar-nav"></Navbar.Toggle>
    <Navbar.Collapse className="navi" id="basic-navbar-nav">
        <div className="nav navbar-collapse navi__content">
            <Link className="nav-link" to="/">about</Link>
            <Link className="nav-link" to="/resume">resume</Link>
            <Link className="nav-link" to="/portfolio">portfolio</Link>
            <Link className="nav-link" to="/contact">contact</Link>
        </div>
    </Navbar.Collapse>
</Navbar>


        </>
    )
}

export default Header;
