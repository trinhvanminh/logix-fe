import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";

const theme = createTheme({
  typography: {
    color: "#fff",
  },
  default: {
    bgColor: "#06121e",
    secondBgColor: "#091c2d",
    purple: "#61166178",
    lightPurple: "#611661",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Outlet />
    </ThemeProvider>
  );
}
