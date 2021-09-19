import React from 'react';
// import PropTypes from 'prop-types';
import HeadingBlock from '../components/HeadingBlock';
import {Container, Row, Col} from 'react-bootstrap';
import TextBlock from '../components/TextBlock';
import WorkCard from '../components/WorkCard';

const Resume = () => {
    return (
        <Container>
            <Row>
                <Col lg={6} xs={12}>
                    <section className="work">
                    <HeadingBlock headingTitle="Work History"/>
                    <WorkCard dateStart={2011} dateEnd={2014} position={"Front-End Web Developer"} location={"Ann Arbor, MI"} summary={"This is a description of the postiion in question. I can put information abotumy achievements , accompleishments, and collaborative efforts to showcase my greatest skills and weaknesses. Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation munere noluisse. Enim torquatos ne pri, eum mollis salutandi corrumpit et, fugit apeirian duo ad."}/>

                    <WorkCard dateStart={2011} dateEnd={2014} position={"Front-End Web Developer"} location={"Ann Arbor, MI"} summary={"This is a description of the postiion in question. I can put information abotumy achievements , accompleishments, and collaborative efforts to showcase my greatest skills and weaknesses. Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation munere noluisse. Enim torquatos ne pri, eum mollis salutandi corrumpit et, fugit apeirian duo ad."}/>

                   <WorkCard dateStart={2011} dateEnd={2014} position={"Front-End Web Developer"} location={"Ann Arbor, MI"} summary={"This is a description of the postiion in question. I can put information abotumy achievements , accompleishments, and collaborative efforts to showcase my greatest skills and weaknesses. Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation munere noluisse. Enim torquatos ne pri, eum mollis salutandi corrumpit et, fugit apeirian duo ad."}/>
                    </section>

                    <section className="work">
                    <HeadingBlock headingTitle="Education"/>
                    <div className="eduCard">
                        <p className="dateRange">2011 - 2020</p>
                        <h3 className="edu-School">University of Michigan - Ann Arbor</h3>
                        <p className="edu-degree">Bachelors of Science - Focus on UI/UX Research & Design</p>
                       
                    </div>
                    <div className="eduCard">
                        <p className="dateRange">2011 - 2020</p>
                        <h3 className="edu-School">University of Michigan - Ann Arbor</h3>
                        <p className="edu-degree">Bachelors of Science - Focus on UI/UX Research & Design</p>
                       
                    </div>
                    </section>
                </Col>
                <Col lg={6} xs={12}>
                    <section className="skills">
                     <HeadingBlock headingTitle="Coding Skills"/>
                    <div clasName="bars">
                        Bars go Here
                    </div>
                    </section>
                    <section className="skills">
                     <HeadingBlock headingTitle="Coding Skills"/>
                    <div clasName="bars">
                        Bars go Here
                    </div>
                    </section>
                    <section className="skills text-block">
                     <HeadingBlock headingTitle="Download My Resume"/>
                        <p className="block-content rg-content">This is a description of the postiion in question. I can put information abotumy achievements , accompleishments, and collaborative efforts to showcase my greatest skills and weaknesses. Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation munere noluisse. Enim torquatos ne pri, eum mollis salutandi corrumpit et, fugit apeirian duo ad.</p>
                        <button className="btn">Download CV</button>
                    </section>
                    <section className="skills text-block">
                     <HeadingBlock headingTitle="Check out my linkedin profile"/>
                        <TextBlock/>
                        </section>
                    </Col>
            </Row>
        </Container>
    );
};

// Resume.propTypes = {};

export default Resume;