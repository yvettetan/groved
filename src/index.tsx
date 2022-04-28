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
import ProductContainer from "./shop/ProductContainer";
import PlantsContainer from "./shop/PlantsContainer";
import GardenKitsContainer from "./shop/GardenKitsContainer";
import ScrollToTop from "./shared/ScrollToTop";
import { Provider } from "react-redux";
import { store } from "./store";
import CartContainer from "./cart/CartContainer";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyle />
        <BrowserRouter>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<App />}>
                <Route path="/" element={<Landing />} />
                <Route path="about" element={<AboutContainer />} />
                <Route path="shop" element={<ShopContainer />}>
                  <Route index element={<PlantsContainer />} />
                  <Route path="garden-kits" element={<GardenKitsContainer />} />
                  <Route path="homebud-grove" element={<PlantsContainer />} />
                  <Route
                    path="homebud-grove/:plantName"
                    element={<ProductContainer />}
                  />
                  <Route
                    path="garden-kits/:kitName"
                    element={<ProductContainer />}
                  />
                </Route>
                <Route path="/cart" element={<CartContainer />} />
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
          </ScrollToTop>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
