import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Historic from "./pages/Historic";
import HistoricDetails from "./pages/HistoricDatails";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/historic" component={Historic} />
        <Route path="/historic-details" component={HistoricDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
