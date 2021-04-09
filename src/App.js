import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";

function App() {
  return (
    <body>
      <Header />
      <main>
        <Switch>
          <Route path="/"></Route>
          <Route path="/search"></Route>
          <Route path="/contact"></Route>
        </Switch>
      </main>
    </body>
  );
}

export default App;
