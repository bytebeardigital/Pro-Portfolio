import React from "react";

class EduCard extends React.Component {
    render(){
        return(
            <section className="work eduCard">
            {this.props.education.map(education => (
                <div>
                    <p className="dateRange">{education.attend} - {education.completed}</p>
                    <h4 className="edu-School">{education.school}</h4>
                    <p className="edu-degree">{education.degree}</p>
                </div>
            ))}
        </section>
        )
    }
}

export default EduCard;