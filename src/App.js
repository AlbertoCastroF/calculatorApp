import CalculatorComp from "./Calculator";
import { ThemeProvider } from "styled-components";
import { themes, GlobalStyles } from "./themes/themes";

function App() {
  const theme = "one";
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <CalculatorComp />
    </ThemeProvider>
  );
}

export default App;
