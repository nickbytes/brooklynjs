import React from "react";
import styled from "styled-components";

const P = styled.p`
  font-size: 28px;
  line-height: 31px;
  margin-bottom: ${props => (props.mbNone ? "10px" : "58px")};
  font-weight: 400;
`;

const Text = ({ children }) => <P>{children}</P>;

export default Text;
