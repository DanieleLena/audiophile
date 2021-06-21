import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar, Footer, ScrollToTop } from "./components";
import {
  Home,
  Error,
  Headphones,
  Speakers,
  Earphones,
  SingleProductPage,
  Checkout,
} from "./pages";

function App() {
  return (
    <Router>
      <ScrollToTop/>
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



export default App;
