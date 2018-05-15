import styled from "styled-components";

export const Container = styled.div`
  margin: 40px auto;
  max-width: ${props => (props.xl ? "none" : "50em")};
`;

export const ChildContainer = styled.div`
  margin-bottom: 40px;
`;

export const NextContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: flex-end;
`;
