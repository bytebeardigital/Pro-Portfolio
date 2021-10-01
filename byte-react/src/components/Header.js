import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import mapImg from '../assets/images/headshot.jpeg';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <Container className="header">
                <Row className="text-center">
                   <div className="branding">
                   <img src={mapImg} className="logo img-fluid" alt="headshot"/>
                   <div className="branding-content">
                       <p className="author">ByteBear Bree</p>
                       <p className="author-role">UI Designer + Developer</p>
                   </div>
                   </div>
                </Row>
                <Row>
                    <div className="nav navigation justify-content-between">
                        <Link className="nav-link" to="/">about me</Link>
                        <Link className="nav-link" to="/resume">resume</Link>
                        <Link className="nav-link" to="/portfolio">portfolio</Link>
                        <Link className="nav-link" to="/contact">contact</Link>
                    </div>
                </Row>
                </Container></>
         );
    }
}
 
export default Header;