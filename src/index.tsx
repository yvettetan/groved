import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyle from "./globalStyle";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Landing from "./landing/LandingContainer";
import ShopContainer from "./shop/ShopContainer";
import AboutContainer from "./about/AboutContainer";
import BlogContainer from "./blog/BlogContainer";
import ProductContainer from "./product/ProductContainer";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Landing />} />
            <Route path="about" element={<AboutContainer />} />
            <Route path="shop" element={<ShopContainer />}>
              <Route path=":plantName" element={<ProductContainer />} />
            </Route>
            <Route path="blog" element={<BlogContainer />} />
          </Route>
          <Route
            path="*"
            element={
              <main>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
