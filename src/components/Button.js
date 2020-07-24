import React from "react";
import styled from "styled-components";

const Button = ({ children, type, onClick }) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  border-radius: 5px;
  background-color: light-gray;
  border: none;
  cursor: pointer;
  padding: 5px 5px;
  &:hover {
    color: orange;
    transition: 0.3s ease;
    background-color: black;
  }
`;

export default Button;
