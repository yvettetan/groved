import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

type Props = {
  theme: ThemeType;
};

const GlobalStyle = createGlobalStyle<Props>`
  /** Optimal Roman **/
  @font-face {
    font-family: "Optimal";
    font-weight: 400;
    font-style: normal;
    src: url("/fonts/OptimaLTPro-Roman.woff2") format("woff2")
  }
  /** Optimal Medium **/
  @font-face {
    font-family: "Optimal";
    font-weight: 500;
    font-style: normal;
    src: url("/fonts/OptimaLTPro-Medium.woff2") format("woff2")
  }
  /** Optimal Bold **/
  @font-face {
    font-family: "Optimal";
    font-weight: 700;
    font-style: normal;
    src: url("/fonts/OptimaLTPro-Bold.woff2") format("woff2")
  }
  /* * HKGrotesk Regular * */
  @font-face {
    font-family: "HKGrotesk";
    font-weight: 400;
    font-style: normal;
    src: url("/fonts/HKGrotesk-Regular.woff2") format("woff2")
  }
  /* * HKGrotesk SemiBold * */
  @font-face {
    font-family: "HKGrotesk";
    font-weight: 600;
    font-style: normal;
    src: url("/fonts/HKGrotesk-SemiBoldLegacy.woff2") format("woff2")
  }

  body {
    color: ${(props) => props.theme.color.primary};
    font-family: ${(props) => props.theme.fontFamily.default};
    font-size: ${(props) => props.theme.fontSize.default};
  }
`;

export default GlobalStyle;
