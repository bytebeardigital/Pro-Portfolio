import React from 'react';
import { CustomPlaceholder } from 'react-placeholder-image';
import {Container, Row, Col, Card} from 'react-bootstrap';
// import PropTypes from 'prop-types';
import HeadingBlock from '../components/HeadingBlock';
import Instagram from '../components/Instagram';

const About = () => {
    return (
        <Container>
           <Row>
           <Col lg={8} xs={12}>
                   
                   <div className="text-block">
                       <HeadingBlock headingTitle="About Me"/>
                       <p className="block-content lg-content">Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem an, cule dicta iriure at. Ubique maluisset vel te, his dico vituperata ut. Pro ei phaedrum maluisset.</p>
                   </div>
               </Col>
               <Col lg={4}>
               <HeadingBlock headingTitle="Insta Feed"/>
                        <Instagram/>
               </Col>
           </Row>
           <Row className="projects">
           <HeadingBlock headingTitle="Recent Projects"/>
                <Col lg={6} xs={12}>
                       <Card className="card projectCard">
                           <CustomPlaceholder width={100} height={50}/>
                           <Card.Body className="card-body meta">
                               <h5>Project TItle</h5>
                               <p className="project-type">Project Type</p>
                           </Card.Body>
                       </Card>
                       </Col>
                   <Col lg={6} xs={12}>
                   <Card className="card projectCard">
                           <CustomPlaceholder width={100} height={50}/>
                           <Card.Body className="card-body meta">
                               <h5>Project TItle</h5>
                               <p className="project-type">Project Type</p>
                           </Card.Body>
                           </Card>
                       </Col>
           </Row>
        </Container>
    );
};

// About.propTypes = {};

export default About;