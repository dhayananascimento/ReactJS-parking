import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Historic from "./pages/Historic";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/historic" component={Historic} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
