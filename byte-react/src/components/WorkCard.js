import React from "react";

const WorkCard = (props) => {
    return  <div className="workCard">
    <p className="dateRange">{props.dateStart} - {props.dateEnd}</p>
    <h3 className="position-title">{props.position}</h3>
    <p className="position-company">{props.company} | <span className="position-location">{props.location}</span></p>
    <p className="position-summary">{props.summary}</p>
</div>;
}

export default WorkCard;