import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Home from "./pages/Home";


import Navigation from "./components/Nav/nav2";

import Survey from "./pages/Survey";
import How from "./pages/How";
import Benefits from "./pages/Benefits";
import Who from "./pages/Who";
import Other from "./pages/Other";
import Board from "./pages/Board";
import Broken from "./pages/Broken";
import Footer from "./components/Footer/index";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./utils/theme.js";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/who">
              <Who />
            </Route>

            <Route exact path="/benefits">
              <Benefits />
            </Route>

            <Route exact path="/other">
              <Other />
            </Route>

            <Route exact path="/how">
              <How />
            </Route>

            <Route exact path="/survey">
              <Survey />
            </Route>

            <Route exact path="/board">
              <Board />
            </Route>

            <Route exact path="/broken">
              <Broken />
            </Route>
          </Switch>

          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
