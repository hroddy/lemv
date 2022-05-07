import React, { useState } from "react";
import Box from "@mui/material/Box";
import Home from "./components/Home/index";
import Nav from "./components/Nav/index";
import Test from "./components/Test/index";
import Broken from "./components/Broken/index";
import Footer from "./components/Footer/index";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./utils/theme.js";


function App() {
  const [page, updateCurrentPage] = useState("Test");
  const renderCorrectPage = () => {
    switch (page) {
      case "Home":
        return <Home />;
      case "Test":
        return <Test updateCurrentPage={updateCurrentPage} />;

      default:
        return <Broken updateCurrentPage={updateCurrentPage} />;
    }
  };
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Nav updateCurrentPage={updateCurrentPage} />
      <Box>
      {renderCorrectPage()}
      </Box>
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
