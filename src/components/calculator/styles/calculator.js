import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: transparent;
  font-size: 32px;
  font-family: "Spartan", sans-serif;
  font-weight: 700; 
  }
`;

export const Display = styled.input`
  height: 80px;
  margin-bottom: 1.5rem;
  border: none;
  outline: none;
  text-align: right;
  border-radius: 10px;
  color: ${({ theme }) => theme.displayText};
  background: ${({ theme }) => theme.screenBack};
`;

export const ButtonsContainer = styled.div`
  height: 400px;
  border-radius: 10px;
  background: ${({ theme }) => theme.keypadBack};
`;

export const Button = styled.button`
  width: 20px;
  height: 20px;
  ]border-radius: 10px;
  border: none;
  margin: 0.5rem;
  color: ${({ theme }) => theme.keyTextColor};
  background: ${({ theme }) => theme.keyBack};
`;
