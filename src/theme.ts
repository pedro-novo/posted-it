import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
   palette: {
      primary: {
         main: "#141E27",
      },
      secondary: {
         main: "#EEEDDE",
      },
      error: {
         main: red.A400,
      },
      background: {
         default: "#E0DDAA",
      },
   },
});

export default theme;
