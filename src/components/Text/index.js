import React from "react";
import styled from "styled-components";

const P = styled.p`
  font-size: 26px;
  line-height: 31px;
  margin-bottom: 58px;
  font-weight: 400;
`;

const Text = ({ children }) => <P>{children}</P>;

export default Text;
