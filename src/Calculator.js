import { Calculator } from "./components";

function CalculatorComp() {
  const buttons = [1, 2, 3, 4, 4, 7];
  return (
    <Calculator>
      <Calculator.Display />
      <Calculator.ButtonsContainer>
        {buttons.map((item) => (
          <Calculator.Button>{item}</Calculator.Button>
        ))}
      </Calculator.ButtonsContainer>
    </Calculator>
  );
}

export default CalculatorComp;
