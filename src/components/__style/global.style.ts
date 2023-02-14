import styled, { createGlobalStyle } from 'styled-components';
// import fonts from './font.style';
import variables from './variable.style';

export const GlobalStyle = createGlobalStyle`

  ${variables};
  a {
  color: inherit;
  text-decoration: none; 
  cursor: pointer;
}
img{
  max-width:100%;
  height: auto;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
 body,
 html{ 
  font-family: var(--Primary-font) ;
  margin: 0;
  padding: 0;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  -ms-text-size-adjust: none;
  text-size-adjust: none;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
  /* background: var( --background-gradient); */
 }

p,
a, span, div {
  font-family: var(--Primary-font) ;
margin: 0;
}

h1,
h2,
h3,
h4,
h6 {
  font-family: var(--Primary-font) ;
  margin-bottom: 0;
}
`;

export const HeadingText = styled.h2<{
  fsize: string;
  fstyle?: string;
  fw: string;
  lh?: string;
  m?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  p?: string;
  pt?: string;
  pb?: string;
  pl?: string;
  pr?: string;
  color: string;
  spacing?: string;
  textTransform?: string;
}>`
  margin-bottom: 0;
  font-family: var(--Primary-font);
  font-size: ${({ fsize }) => fsize};
  font-style: ${({ fstyle }) => fstyle ?? 'normal'};
  font-weight: ${({ fw }) => fw};
  line-height: ${({ lh }) => lh};
  margin: ${({ m }) => m};
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
  margin-left: ${({ ml }) => ml};
  margin-right: ${({ mr }) => mr};
  padding: ${({ p }) => p};
  padding-top: ${({ pt }) => pt};
  padding-bottom: ${({ pb }) => pb};
  padding-left: ${({ pl }) => pl};
  letter-spacing: ${({ spacing }) => spacing};
  text-transform: ${({ textTransform }) => textTransform};
  padding-right: ${({ pr }) => pr};
  color: ${({ color }) => color};
`;
export const ParagraphText = styled.p<{
  fsize: string;
  fstyle?: string;
  textTransform?: string;
  fw: string;
  lh?: string;
  m?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  p?: string;
  pt?: string;
  pb?: string;
  pl?: string;
  pr?: string;
  color: string;
  spacing?: string;
}>`
  margin-bottom: 0;
  font-family: var(--Primary-font);
  text-transform: ${({ textTransform }) => textTransform};
  letter-spacing: ${({ spacing }) => spacing};
  font-size: ${({ fsize }) => fsize};
  font-style: ${({ fstyle }) => fstyle ?? 'normal'};
  font-weight: ${({ fw }) => fw};
  line-height: ${({ lh }) => lh};
  margin: ${({ m }) => m};
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
  margin-left: ${({ ml }) => ml};
  margin-right: ${({ mr }) => mr};
  padding: ${({ p }) => p};
  padding-top: ${({ pt }) => pt};
  padding-bottom: ${({ pb }) => pb};
  padding-left: ${({ pl }) => pl};
  padding-right: ${({ pr }) => pr};
  color: ${({ color }) => color};
`;
