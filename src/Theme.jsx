import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#3abe8e",
    },
    secondary: {
      main: "#f19561",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});
