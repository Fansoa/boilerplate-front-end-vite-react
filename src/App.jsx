import { ThemeProvider } from "@emotion/react";
import "./normalize.css";

import { BrowserRouter } from "react-router-dom";
import theme from "./theme";

import Routes from "./routes/index.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
