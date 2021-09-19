import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import HeadingBlock from '../components/HeadingBlock';
import { CustomPlaceholder } from 'react-placeholder-image';

const Portfolio = () => {
    return (
        <Container className="portfolio-page">
            <HeadingBlock headingTitle="Portfolio" className="text-center"/>
            <section className="portfolio-controls">
                    <ul className="nav justify-content-between">
                        <a className="filter active" href={"#"}>Web Design</a>
                        <a className="filter" href={"#"}>Development</a>
                        <a className="filter " href={"#"}>WordPress</a>
                    </ul>
            </section>
            <section className="portfolio">
                <Row className="project-inner">
                <Col lg={4} xs={12}>
                       <Card className="card projectCard">
                           <CustomPlaceholder width={100} height={50}/>
                           <Card.Body className="card-body meta">
                               <h5>Project TItle</h5>
                               <p className="project-type">Project Type</p>
                           </Card.Body>
                       </Card>
                       </Col>
                       <Col lg={4} xs={12}>
                       <Card className="card projectCard">
                           <CustomPlaceholder width={100} height={50}/>
                           <Card.Body className="card-body meta">
                               <h5>Project TItle</h5>
                               <p className="project-type">Project Type</p>
                           </Card.Body>
                       </Card>
                       </Col>
                       <Col lg={4} xs={12}>
                       <Card className="card projectCard">
                           <CustomPlaceholder width={100} height={50}/>
                           <Card.Body className="card-body meta">
                               <h5>Project TItle</h5>
                               <p className="project-type">Project Type</p>
                           </Card.Body>
                       </Card>
                       </Col>
                       <Col lg={4} xs={12}>
                       <Card className="card projectCard">
                           <CustomPlaceholder width={100} height={50}/>
                           <Card.Body className="card-body meta">
                               <h5>Project TItle</h5>
                               <p className="project-type">Project Type</p>
                           </Card.Body>
                       </Card>
                       </Col>
                       <Col lg={4} xs={12}>
                       <Card className="card projectCard">
                           <CustomPlaceholder width={100} height={50}/>
                           <Card.Body className="card-body meta">
                               <h5>Project TItle</h5>
                               <p className="project-type">Project Type</p>
                           </Card.Body>
                       </Card>
                       </Col>
                       <Col lg={4} xs={12}>
                       <Card className="card projectCard">
                           <CustomPlaceholder width={100} height={50}/>
                           <Card.Body className="card-body meta">
                               <h5>Project TItle</h5>
                               <p className="project-type">Project Type</p>
                           </Card.Body>
                       </Card>
                       </Col>
                </Row>
            </section>
        </Container>
    );
};

Portfolio.propTypes = {};

export default Portfolio;