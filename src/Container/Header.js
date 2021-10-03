import { Calculator } from "../components";
import { useContext } from "react";
import { Context } from "../Context";

function HeaderComponent() {
  const selectors = [1, 2, 3];
  const { handleTheme } = useContext(Context);
  return (
    <Calculator.Header>
      <Calculator.Logo>calc</Calculator.Logo>
      <Calculator.TogglerContainer>
        <Calculator.ThemeText>THEME</Calculator.ThemeText>
        <Calculator.Toggler>
          <Calculator.OptionContainer>
            <Calculator.Option>1</Calculator.Option>
            <Calculator.Option>2</Calculator.Option>
            <Calculator.Option>3</Calculator.Option>
          </Calculator.OptionContainer>
          <Calculator.ThemeSelectors>
            {selectors.map((item, inx) => (
              <Calculator.Theme
                key={inx}
                id={item}
                onClick={() => handleTheme(item)}
              />
            ))}
          </Calculator.ThemeSelectors>
        </Calculator.Toggler>
      </Calculator.TogglerContainer>
    </Calculator.Header>
  );
}

export default HeaderComponent;
