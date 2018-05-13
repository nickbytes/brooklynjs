import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 40px;
  max-width: ${props => (props.xl ? "none" : "40em")};
`;

const Scene = ({ isVisible, children, xl }) => (
  <div>{isVisible && <Container xl={xl}>{children}</Container>}</div>
);

export default Scene;
