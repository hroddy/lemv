import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LogRocket from "logrocket";
import ReactGA from "react-ga";

import Home from "./pages/Home";

import Navigation from "./components/Nav/nav2";
import Broken from "./pages/Broken";
import Footer from "./components/Footer/index";

import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

import Wordpress from "./pages/Wordpress";

import Survey from "./pages/Survey";
import Recipes from "./pages/Recipes";
import Benefits from "./pages/Benefits";
import Who from "./pages/Who";
import More from "./pages/Other";
import Board from "./pages/Board";

import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./utils/theme.js";

function App() {
  useEffect(() => {
    LogRocket.init(process.env.REACT_APP_LOGROCKET_ENVIRONMENT);
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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

            <Route exact path="/more">
              <More />
            </Route>

            <Route exact path="/recipes">
              <Recipes />
            </Route>

            <Route exact path="/survey">
              <Survey />
            </Route>

            <Route exact path="/board">
              <Board />
            </Route>

            <Route exact path="/blog">
              <Blog />
            </Route>

            <Route exact path="/post/:blogId">
              <BlogPost />
            </Route>

            <Route exact path="/wordpress">
              <Wordpress />
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
