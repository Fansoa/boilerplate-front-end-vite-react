import global from "./global";
import testComponentTheme from "./componentsTheme/TestComponent/index.jsx";

const componentsTheme = {
  testComponentTheme,
};

const theme = {
  ...global,
  ...componentsTheme,
};

export default theme;
