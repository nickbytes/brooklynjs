import React from "react";

import { ChildContainer, Container, NextContainer } from "./styles";
import { NextButton, NextLink } from "../NextComponents";

const Clip = ({ children, xl, hideNav, nextPage, center, id, clickFn }) => (
  <div>
    {id && (
      <Container xl={xl}>
        <ChildContainer center={center}>{children}</ChildContainer>
        {!hideNav && (
          <NextContainer>
            <NextButton clickFn={() => clickFn()} />
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

export default Clip;
