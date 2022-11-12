import React from "react";
import {NavLink} from "react-router-dom";

import styled from 'styled-components';

const NavMenuStyles=styled.div`
    background-color: red;
      position:fixed;
      z-index:100;
      top:0;
      left:0;
      width:100%;
      padding: 1rem 0;
      background:#262626;
ul{
  max-width: 1200px;
  margin: 0 auto;
  width:90%;
  text-align:center;
  li{
    display:inline-block;
    border-radius:8px;
    transition: .3s ease background-color;
    &:hover{
      background-color:black;
    }
  }
  a{
    display:inline-block;
    padding:1rem 2rem;
    font-size: 2rem;
    color:#BCB4B4;
    outline:none;
  }
  .active{
    color:white;
  }
}
`;
export default function NavMenu(){
  return(
    <NavMenuStyles>
      <ul>
        <li>
          <NavLink to="/" exact>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </NavMenuStyles>
  )
}