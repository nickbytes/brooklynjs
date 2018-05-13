import React from "react";
import styled from "styled-components";

const Blockquote = styled.blockquote`
  font-size: 35px;
  line-height: 42px;
  margin-bottom: 60px;
  font-weight: 400;
`;

const Quote = ({ children }) => <Blockquote>{children}</Blockquote>;

export default Quote;
