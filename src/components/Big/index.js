import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 64px;
  line-height: 80px;
  margin-bottom: 100px;
  font-weight: 700;
`;

const Big = ({ children }) => <H1>{children}</H1>;

export default Big;
