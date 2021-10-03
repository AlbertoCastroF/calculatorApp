import {
  Container,
  Display,
  ButtonsContainer,
  Button,
  Header,
  Logo,
  TogglerContainer,
  ThemeText,
  Toggler,
  Option,
  ThemeSelectors,
  Theme,
  OptionContainer,
} from "./styles/calculator";

//ALL THE COMPONENTS THAT WILL CREATE MY CALCULATOR

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

Calculator.Header = function CalculatorHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Calculator.Logo = function CalculatorLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};

Calculator.TogglerContainer = function CalculatorTogglerContainer({
  children,
  ...restProps
}) {
  return <TogglerContainer {...restProps}>{children}</TogglerContainer>;
};

Calculator.ThemeText = function CalculatorThemeText({
  children,
  ...restProps
}) {
  return <ThemeText {...restProps}>{children}</ThemeText>;
};

Calculator.Toggler = function CalculatorToggler({ children, ...restProps }) {
  return <Toggler {...restProps}>{children}</Toggler>;
};

Calculator.Option = function CalculatorOption({ children, ...restProps }) {
  return <Option {...restProps}>{children}</Option>;
};

Calculator.ThemeSelectors = function CalculatorThemeSelectors({
  children,
  ...restProps
}) {
  return <ThemeSelectors {...restProps}>{children}</ThemeSelectors>;
};

Calculator.Theme = function CalculatorTheme({ children, ...restProps }) {
  return <Theme {...restProps}>{children}</Theme>;
};

Calculator.OptionContainer = function CalculatorOptionContainer({
  children,
  ...restProps
}) {
  return <OptionContainer {...restProps}>{children}</OptionContainer>;
};
