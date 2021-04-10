import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./mainComponents/Header";
import Home from "./mainComponents/Home";
import Search from "./mainComponents/Search";
import Contact from "./mainComponents/Contact";
import Donate from "./mainComponents/Donate";

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/donate">
            <Donate />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
