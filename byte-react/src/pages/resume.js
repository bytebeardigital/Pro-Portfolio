import React from 'react';
// import PropTypes from 'prop-types';
import HeadingBlock from '../components/HeadingBlock';
import {Container, Row, Col} from 'react-bootstrap';
import TextBlock from '../components/TextBlock';
import WorkCard from '../components/WorkCard';
import EduCard from '../components/EduCard';

class Resume extends React.Component {
    state = {
        positions: [
            {
                id: 1,
                position: 'Front End Web Developer',
                company: 'Inside Out Web Development',
                location: 'Royal Oak, MI',
                startDate: 2019,
                endDate: 2020,
                desc: 'This is a description of the postiion in question. I can put information abotumy achievements , accompleishments, and collaborative efforts to showcase my greatest skills and weaknesses.'
            },
            {
                id: 2,
                position: 'Digital Marketing Manager  - Web Lead',
                company: 'Qualigence International',
                location: 'Southfield, MI',
                startDate: 2019,
                endDate: 2020,
                desc: 'This is a description of the postiion in question. I can put information abotumy achievements , accompleishments, and collaborative efforts to showcase my greatest skills and weaknesses.'
            },
            {
                id: 3,
                position: 'UI Developer',
                company: 'Zingermanns Deli',
                location: 'Ann Arbor, MI',
                startDate: 2019,
                endDate: 2020,
                desc: 'This is a description of the postiion in question. I can put information abotumy achievements , accompleishments, and collaborative efforts to showcase my greatest skills and weaknesses.'
            },
            {
                id: 4,
                position: 'Graphic and Web Designer',
                company: 'Ann Arbor Wellness Collective',
                location: 'Ann Arbor, MI',
                startDate: 2019,
                endDate: 2020,
                desc: 'This is a description of the postiion in question. I can put information abotumy achievements , accompleishments, and collaborative efforts to showcase my greatest skills and weaknesses.'
            }
        ],
        education: [
            {
                id: 1,
                attend: 2011,
                completed: 2016,
                school: 'University of Michigan - Ann Arbor',
                degree: 'Bachelors of Science'
            },
            {
                id: 2,
                attend: 2014,
                completed: 2016,
                school: 'Washtenaw Community College',
                degree: 'Web Design and Develompent Certification'
            }
        ]
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col lg={6} xs={12}>
                        <section className="work">
                        <HeadingBlock headingTitle="Work History"/>
                        <WorkCard positions={this.state.positions}/>
                        </section>
    
                        <section className="work">
                        <HeadingBlock headingTitle="Education"/>
                        <EduCard education={this.state.education} />
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
    }
}

// Resume.propTypes = {};

export default Resume;