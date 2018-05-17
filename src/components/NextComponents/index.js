import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button`
  font-size: 64px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`;

export const NextButton = ({ clickFn }) => (
  <Button onClick={() => clickFn()}>☞</Button>
);

const StyledLink = styled(Link)`
  font-size: 64px;
  text-decoration: none;
  color: #000;
`;

export const NextLink = ({ href }) => <StyledLink to={href}>☞</StyledLink>;
