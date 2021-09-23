import React from "react";

class WorkCard extends React.Component {
    render(){
        return(
            <div className="workCard">
            {this.props.positions.map(position => (
                <div>
                    <p className="dateRange">{position.startDate} - {position.endDate}</p>
                    <h4 className="position-title">{position.position}</h4>
                    <p className="position-company">{position.company} - {position.location}</p>
                    <p className="position-summary">{position.desc}</p>
                </div>
            ))}
        </div>
        )
    }
}

export default WorkCard;