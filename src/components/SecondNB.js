import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapPin,
  faCalendar,
  faCalendarCheck,
  faPause,
  faArrowDown,
  faArrowUp,
  faArrowRight,
  faArrowLeft,
  faBell,
  faQuestion,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

function SecondNB() {
  return (
    <NavContainer>
      <StyledLinks to="#">Link1</StyledLinks>
      <StyledLinks to="#">Link2</StyledLinks>
      <StyledLinks to="#">Link3</StyledLinks>
      <StyledLinks to="#">
        <FontAwesomeIcon icon={faMapPin}></FontAwesomeIcon>
      </StyledLinks>
      <StyledLinks to="#">
        <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
      </StyledLinks>
      <StyledLinks to="#">
        <FontAwesomeIcon icon={faCalendarCheck}></FontAwesomeIcon>
      </StyledLinks>
      <StyledLinks to="#">
        <FontAwesomeIcon icon={faCalendarCheck}></FontAwesomeIcon>
      </StyledLinks>
      <StyledLinks to="#">
        <FontAwesomeIcon icon={faPause}></FontAwesomeIcon>
      </StyledLinks>
      <StyledLinks to="#">
        <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
      </StyledLinks>
      <StyledLinks to="#">
        <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
      </StyledLinks>
      <StyledLinks to="#">
        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
      </StyledLinks>
      <StyledLinks to="#">
        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
      </StyledLinks>
      <StyledLinks to="#">
        <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
      </StyledLinks>
      <StyledLinks to="#">
        <FontAwesomeIcon icon={faQuestion}></FontAwesomeIcon>
      </StyledLinks>
      <StyledLinks to="#">
        <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
      </StyledLinks>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  display: flex;
  background-color: #fff9f2;
`;
const StyledLinks = styled(NavLink)`
  color: black;
  padding: 15px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: orange;
  }
`;
export default SecondNB;
