import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button`
  font-size: 64px;
  border: none;
  background-color: transparent;
  outline: none;
`;

export const NextButton = () => (
  <Button onClick={() => console.log("figure that out later")}>☞</Button>
);

const StyledLink = styled(Link)`
  font-size: 64px;
  text-decoration: none;
  color: #000;
`;

export const NextLink = ({ href }) => <StyledLink to={href}>☞</StyledLink>;
