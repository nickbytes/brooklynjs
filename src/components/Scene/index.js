import React from "react";

import { ChildContainer, Container, NextContainer } from "./styles";
import { NextButton, NextLink } from "../NextComponents";

const Scene = ({ isVisible, children, xl, hideNav, nextPage }) => (
  <div>
    {isVisible && (
      <Container xl={xl}>
        <ChildContainer>{children}</ChildContainer>
        {!hideNav && (
          <NextContainer>
            <NextButton />
          </NextContainer>
        )}

        {nextPage && (
          <NextContainer>
            <NextLink href={`/${nextPage}`} />
          </NextContainer>
        )}
      </Container>
    )}
  </div>
);

export default Scene;
