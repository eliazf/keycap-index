import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";

function App() {
  return (
    <body>
      <Header />
      <Switch>
        <Route path="/"></Route>
        <Route path="/search"></Route>
        <Route path="/contact"></Route>
      </Switch>
    </body>
  );
}

export default App;
