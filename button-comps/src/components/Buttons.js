import React from "react";
import Button from "./Button";
import styled from "styled-components";


const DefaultBtn = styled.button`
    background-color: #B1A0C8;
    width: 81px;
    height: 36px;
    border-radius: 6px;
    border: none;
    box-shadow: 0px 2px 3px 0px rgba(51,51,51, 0.2);
    font-size: 14px;
    font-weight: 500;
    
    transition: all ease-in-out .5s;

    &:hover,
    &:focus {
        background-color: #704E9E;
    }
`;


function Buttons()
{
    return (
        <>
        <h1>Buttons</h1>
        <div className="row">
        <div className="col-4"><DefaultBtn>Default</DefaultBtn></div>
        <div className="col-4"><DefaultBtn>Default Btn hovered</DefaultBtn></div>

        <div className="col-4"><DefaultBtn>Default Btn hovered</DefaultBtn></div>
        </div>
        </>
        );
}

export default Buttons;