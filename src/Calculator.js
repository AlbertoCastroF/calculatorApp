import { Calculator } from "./components";
import HeaderComponent from "./Container/Header";
import { useContext } from "react";
import { Context } from "./Context";

function CalculatorComp() {
  const { handleKeyPress, display } = useContext(Context);
  const keys = [
    { value: 7, position: 0 },
    { value: 8, position: 1 },
    { value: 9, position: 2 },
    { value: "DEL", position: 3 },
    { value: 4, position: 4 },
    { value: 5, position: 5 },
    { value: 6, position: 6 },
    { value: "+", position: 7 },
    { value: 1, position: 8 },
    { value: 2, position: 9 },
    { value: 3, position: 10 },
    { value: "-", position: 11 },
    { value: ".", position: 12 },
    { value: 0, position: 13 },
    { value: "/", position: 14 },
    { value: "*", position: 15 },
    { value: "RESET", position: 16 },
    { value: "=", position: 17 },
  ];
  return (
    <Calculator>
      <HeaderComponent />
      <Calculator.Display>{display}</Calculator.Display>
      <Calculator.ButtonsContainer>
        {keys.map((item) => (
          <Calculator.Button
            key={item.position}
            onClick={() => handleKeyPress(item.value)}
            name={item.value}
          >
            {item.value}
          </Calculator.Button>
        ))}
      </Calculator.ButtonsContainer>
    </Calculator>
  );
}

export default CalculatorComp;
