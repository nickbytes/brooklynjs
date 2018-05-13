import React from "react";
import styled from "styled-components";

const VoiceBlockquote = styled.blockquote`
  font-family: "Times New Roman", Times, serif;
  font-style: italic;
  font-stretch: semi-expanded;
`;

const Voice = ({ children }) => <VoiceBlockquote>{children}</VoiceBlockquote>;

export default Voice;
