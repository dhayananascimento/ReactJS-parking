import React from "react";
import GlobalStyles from "./GlobalStyles";

import MainProvider from "./provider/MainProvider";
import Routes from "./routes";

function App() {
  return (
    <MainProvider>
      <Routes />
      <GlobalStyles />
    </MainProvider>
  );
}

export default App;
