import React from "react";
import styled from "styled-components";

const Span = styled.span`
  font-size: 64px;
  line-height: 80px;
  margin-bottom: 100px;
  font-weight: 700;
`;

const BigInline = ({ children }) => <Span>{children}</Span>;

export default BigInline;
