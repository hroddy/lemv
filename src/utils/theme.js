import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
        //dark gray
        main: '#495057',
        //main: "#343A40",
    },
    secondary: {
        //white
        main: '#ffffff',
      },
      tertiary: {
          //silver
          main: '#FFD289',
      },
    tonalOffset: 0.2,
  },
});
