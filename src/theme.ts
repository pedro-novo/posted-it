import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
   palette: {
      primary: {
         main: "#79B4B7",
      },
      secondary: {
         main: "#041C32",
      },
      error: {
         main: red.A400,
      },
      background: {
         default: "#EEEEEE",
      },
   },
});

export default theme;
