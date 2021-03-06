import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 64px;
  line-height: 80px;
  margin-bottom: ${props => (props.bottom ? "0" : "100px")};
  font-weight: 700;
`;

const Big = ({ children, bottom }) => <H1 bottom={bottom}>{children}</H1>;

export default Big;
