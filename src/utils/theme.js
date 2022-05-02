import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
        main: "#212529",
    },
    secondary: {
        //silver
        main: '#6C757D',
        //dark gray
        //main: '#495057',
        //main: "#343A40",
      },
      tertiary: {
          //white
        main: "#ffffff",
      },
      quaternary: {
          //silver
          main: '#FFD289',
      },
    tonalOffset: 0.2,
  },
});
