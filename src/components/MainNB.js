import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function MainNB() {
  return (
    <NavContainer>
      <StyledLinks to="/">
        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
      </StyledLinks>
      <StyledLinks to="#">Link1</StyledLinks>
      <StyledLinks to="#">Link2</StyledLinks>
      <StyledLinks to="#">Link3</StyledLinks>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  display: flex;
  background-color: #1f2530;
`;

const StyledLinks = styled(NavLink)`
  color: white;
  padding: 15px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: orange;
  }
`;
export default MainNB;
