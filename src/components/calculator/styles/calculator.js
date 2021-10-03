import styled from "styled-components";

//I USE STYLED COMPONENTS WITH COMPOUND COMPONENTS TO HAVE MORE CONTROL OVER HOW I WANT TO DISPLAY THE CALCULATOR ELEMENTS

export const Container = styled.div`
  width: 320px;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: transparent; 
  }

  @media (min-width: 1000px) {
    width: 500px;
  }
`;

export const Display = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  word-wrap: break-word;
  word-break: break-all;
  min-height: 100px;
  margin-bottom: 1rem;
  border: none;
  outline: none;
  padding: 0.3em;
  text-align: right;
  border-radius: 10px;
  caret-color: transparent;
  color: ${({ theme }) => theme.displayText};
  background: ${({ theme }) => theme.screenBack};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.1rem;
  height: 420px;
  border-radius: 10px;
  background: ${({ theme }) => theme.keypadBack};
`;

export const Button = styled.button`
  width: ${({ name }) => (name === "RESET" || name === "=" ? "120px" : "60px")};
  height: 65px;
  border-radius: 5px;
  border: none;
  margin: 0.2em;
  font-size: ${({ name }) => (name === "DEL" || name === "RESET") && "20px"};

  color: ${({ theme, name }) =>
    name === "RESET" || name === "DEL" || name === "="
      ? theme.displayText
      : theme.keyTextColor};

  box-shadow: ${({ theme, name }) =>
    name === "DEL" || name === "RESET"
      ? `0 5px 1px 0px ${theme.delResetKeyShadow}`
      : name === "="
      ? `0 5px 1px 0px ${theme.equalKeyShadow}`
      : `0 5px 1px 0px ${theme.keyShadow}`};

  background: ${({ theme, name }) =>
    name === "DEL" || name === "RESET"
      ? theme.delResetKeyBack
      : name === "="
      ? theme.equalKeyBack
      : theme.keyBack};

  &:active {
    transform: scale(0.99);
    box-shadow: none;
  }

  @media (min-width: 1000px) {
    width: ${({ name }) =>
      name === "RESET" || name === "=" ? "220px" : "100px"};
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.displayText};
`;
export const Logo = styled.h2``;

export const TogglerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const ThemeText = styled.h3`
  font-size: 14px;
  margin-right: 1.3em;
  margin-bottom: 0.2em;
`;
export const Toggler = styled.div``;

export const OptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2em 0.3em;
`;

export const Option = styled.span`
  font-size: 15px;
`;

export const ThemeSelectors = styled.div`
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2em;
  border-radius: 15px;
  background: ${({ theme }) => theme.keypadBack};
`;

export const Theme = styled.button`
  width: 15px;
  height: 15px;
  border: none;
  border-radius: 50%;
  background: ${({ theme, id }) =>
    theme.id === id ? theme.equalKeyBack : "transparent"};
`;
