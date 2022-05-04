import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

type Props = {
  theme: ThemeType;
};

const GlobalStyle = createGlobalStyle<Props>`
  /** Optima Roman **/
  @font-face {
    font-family: "Optima";
    font-weight: 400;
    font-style: normal;
    src: url("/assets/fonts/OptimaLTPro-Roman.woff2") format("woff2")
  }
  /** Optima Medium **/
  @font-face {
    font-family: "Optima";
    font-weight: 500;
    font-style: normal;
    src: url("/assets/fonts/OptimaLTPro-Medium.woff2") format("woff2")
  }
  /** Optima Bold **/
  @font-face {
    font-family: "Optima";
    font-weight: 700;
    font-style: normal;
    src: url("/assets/fonts/OptimaLTPro-Bold.woff2") format("woff2")
  }
  /* * HKGrotesk Regular * */
  @font-face {
    font-family: "HKGrotesk";
    font-weight: 400;
    font-style: normal;
    src: url("/assets/fonts/HKGrotesk-Regular.woff2") format("woff2")
  }
  /* * HKGrotesk SemiBold * */
  @font-face {
    font-family: "HKGrotesk";
    font-weight: 600;
    font-style: normal;
    src: url("/assets/fonts/HKGrotesk-SemiBoldLegacy.woff2") format("woff2")
  }

  body {
    color: ${(props) => props.theme.color.primary};
    font-family: ${(props) => props.theme.fontFamily.default};
    font-size: ${(props) => props.theme.fontSize.default};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    height:100vh; 
    margin:0;
    display:flex; 
    flex-direction:column; 
  }

  h1, h2, h3 {
    font-family: ${(props) => props.theme.fontFamily.headline};
    text-transform: capitalize;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.primary};
  }
  button {
    cursor: pointer;
    background-color: transparent;
    border: 0;
  }
  header, footer {
    min-height: 50px;
  }
  footer {
    margin-top:auto; 
  }
`;

export default GlobalStyle;
