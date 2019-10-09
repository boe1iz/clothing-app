import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage/HomePage";

const HatsPage = () => {
  return <h1>Hats page</h1>;
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop/hats">
          <HatsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
