import CalculatorComp from "./Calculator";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { Context } from "./Context";
import { themes, GlobalStyles } from "./themes/themes";

function App() {
  const { selection } = useContext(Context);
  return (
    <ThemeProvider theme={themes[selection]}>
      <GlobalStyles />
      <CalculatorComp />
    </ThemeProvider>
  );
}

export default App;
