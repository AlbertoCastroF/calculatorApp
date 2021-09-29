import {
  Container,
  Display,
  ButtonsContainer,
  Button,
} from "./styles/calculator";

export default function Calculator({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Calculator.Display = function CalculatorDisplay({ ...restProps }) {
  return <Display {...restProps}></Display>;
};

Calculator.ButtonsContainer = function CalculatorButtonsContainer({
  children,
  ...restProps
}) {
  return <ButtonsContainer {...restProps}>{children}</ButtonsContainer>;
};

Calculator.Button = function CalculatorButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
