import { ThemeProvider } from "@emotion/react";
import "./normalize.css";

import TestComponent from "./components/TestComponent/index.jsx";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TestComponent />
    </ThemeProvider>
  );
}

export default App;
