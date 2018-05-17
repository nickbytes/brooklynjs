import React from "react";
import styled, { css } from "styled-components";

const P = styled.p`
  font-size: 28px;
  line-height: 31px;
  margin-bottom: ${props => (props.mbNone ? "10px" : "58px")};
  font-weight: ${props => (props.bold ? "700" : "400")};

  ${props =>
    props.med
      ? css`
          font-size: 40px;
          line-height: 47px;
        `
      : null};
`;

const Text = ({ med, children, mbNone, bold }) => (
  <P med={med} mbNone={mbNone} bold={bold}>
    {children}
  </P>
);

export default Text;
