import styled from "styled-components";

const Img = styled.img`
  margin: 0 auto;
  width: 100%;
  max-width: ${props => (props.mw ? `${props.mw}px` : "800px")};
  display: ${props => (props.inline ? "inline" : "block")};
`;

export default Img;
