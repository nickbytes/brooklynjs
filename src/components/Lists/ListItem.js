import React from "react";
import styled from "styled-components";

const ItemStyled = styled.li`
  margin: 0 0 16px;
`;

export const ListItem = ({ children }) => <ItemStyled>{children}</ItemStyled>;
