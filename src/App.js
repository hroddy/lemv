import React, { useState } from "react";
import Box from "@mui/material/Box";
import Home from "./components/Home/index";

import Nav from "./components/Nav/index";
import Navigation from "./components/Nav/nav2";

// import TestNav from "./components/Test-Nav/index";
import Contact from "./components/Contact/index";
import How from "./components/How/index";
import Benefits from "./components/Benefits/index";
import Who from "./components/Who/index";
import Other from "./components/Other/index";
import Board from "./components/Board/index";
import Broken from "./components/Broken/index";
import Footer from "./components/Footer/index";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./utils/theme.js";

function App() {
  const [page, updateCurrentPage] = useState("Home");
  const renderCorrectPage = () => {
    switch (page) {
      case "Contact":
        return <Contact updateCurrentPage={updateCurrentPage} />;
      case "Home":
        return <Home updateCurrentPage={updateCurrentPage} />;
      case "How":
        return <How updateCurrentPage={updateCurrentPage} />;
      case "Benefits":
        return <Benefits updateCurrentPage={updateCurrentPage} />;
      case "Who":
        return <Who updateCurrentPage={updateCurrentPage} />;
      case "Other":
        return <Other updateCurrentPage={updateCurrentPage} />;
      case "Board":
        return <Board updateCurrentPage={updateCurrentPage} />;
      default:
        return <Broken updateCurrentPage={updateCurrentPage} />;
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <div>
   
        <Navigation updateCurrentPage={updateCurrentPage} />
        <Box>{renderCorrectPage()}</Box>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
