import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      //dark gray
      main: "#495057",
      //main: "#343A40",
      
    },
    secondary: {
      // white
      main: "#ffffff",
      // //blue
      // main: "#7B7BFF",
      
    },
    tetirary: {
      //blue
      main: "#477998",
    },
    tonalOffset: 0.2,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 415,
      md: 800,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: [
      "Roboto",
      // 'Playfair Display',
      "serif",
    ].join(","),
    fontSize: 16,
  },
  subtitle: {
    fontSize: 10,
  },
  color: {
    main: "#495057",
    secondary: "#477998"}
});
