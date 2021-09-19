import React from 'react';
const Button = (props) => {
    return (
        <div>
            <button className="btn"><a href="#" target="_blank">{props.buttonText}</a></button>
        </div>
    );
};


export default Button;