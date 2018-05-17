import React from "react";
import styled from "styled-components";

const Blockquote = styled.blockquote`
  font-size: 35px;
  line-height: 42px;
  margin: 0 0 60px;
  padding: 40px;
  font-weight: 400;
  background-color: rgba(170, 177, 193, 0.5);
`;

const Quote = ({ children }) => <Blockquote>{children}</Blockquote>;

export default Quote;
