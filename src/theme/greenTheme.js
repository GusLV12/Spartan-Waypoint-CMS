import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const greenTheme = createTheme({
  palette: {
    primary: {
      main: "rgba(255, 255, 255, 0.1)",
    },
    secondary: {
      main: "#0000",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor:
            "radial-gradient(circle at center, #0569cd, #002d5a, #001430)",
        },
      },
    },
  },
});
