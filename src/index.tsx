import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyle from "./globalStyle";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
