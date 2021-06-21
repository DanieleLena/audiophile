import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar, Footer } from "./components";
import {
  Home,
  Error,
  Headphones,
  Speakers,
  Earphones,
  SingleProductPage,
  Checkout,
} from "./pages";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/headphones">
          <Headphones />
        </Route>
        <Route exact path="/speakers">
          <Speakers />
        </Route>
        <Route exact path="/earphones">
          <Earphones />
        </Route>
        <Route
          exact
          path="/:category/:id"
          children={<SingleProductPage />}
        ></Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

const Wrapper = styled.section``;

export default App;
