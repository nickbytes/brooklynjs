import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 40px auto;
  max-width: ${props => (props.xl ? "none" : "50em")};
`;

export const ChildContainer = styled.div`
  margin-bottom: 40px;
  ${props =>
    props.center
      ? css`
          text-align: center;
        `
      : null};
`;

export const NextContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: flex-end;
`;
