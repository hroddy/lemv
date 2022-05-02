import React, { useState } from "react";
import Box from "@mui/material/Box";
import About from "./components/About/index";
import Nav from "./components/Nav/index";

import Broken from "./components/Broken/index";
import Footer from "./components/Footer/index";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./utils/theme.js";


function App() {
  const [page, updateCurrentPage] = useState("About");
  const renderCorrectPage = () => {
    switch (page) {
      case "About":
        return <About />;

      default:
        return <Broken updateCurrentPage={updateCurrentPage} />;
    }
  };
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Nav updateCurrentPage={updateCurrentPage} />
      <Box my={3}>
      {renderCorrectPage()}
      </Box>
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
