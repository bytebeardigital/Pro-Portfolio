import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";

const Sidebar = styled.div`

    height: 100%; //full-height
    z-index: 1;
    width: 200px;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;

    top: 0;
    left: 0;
    background-color: #F1F1F1;
    overflow-x: hidden;
    padding-top: 20px;
    padding: 20px 6px 5px 6px;

    .nav-link {
        padding-bottom: 10px;
        font-size: 18px;
        color: purple;
        text-align: center;
        display: block;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        &:hover {
            color: #A26691;
        }
        &.active {
            font-weight: 500;
            }
    }
`;

const Branding = styled.div`
    margin-bottom: 25px;
    text-align: center;
    vertical-align: middle;
    display: flex;
    flex-direction: column;
    img {
        width: 100px;
        height: 100px;
        margin: 0 auto;
    }
    a {
        color: #2E1760;
        text-decoration: none;

    }
    &:after {
        content: '';
        border: 2px solid #b185db;
        width: 50px;
        display: block;
        margin: 10px auto;
    }

`;

function SideNav( ) {
    return(
        <Sidebar>
            <Branding>
                <img alt ="logo" src={logo}/>
                <a href="https://" >ByteBearDigital</a>

            </Branding>
            <a className="nav-link" href="#">Colors</a>
            <a className="nav-link active" href="#">Buttons</a>
            <a className="nav-link" href="#">Typography</a>
            <a className="nav-link" href="#">Grid</a>
        </Sidebar>
    )
}
export default SideNav;