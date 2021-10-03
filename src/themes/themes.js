import { createGlobalStyle } from "styled-components";

//these are the general styles i will use for the site
export const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
      font-size: 32px;
      font-family: "Spartan", sans-serif;
      font-weight: 700; 
    }

    body {   
      height: 90vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.mainBack};
    }
`;

//the colors that represent each theme
export const themes = {
  1: {
    id: 1,
    mainBack: "hsl(222, 26%, 31%)",
    keypadBack: "hsl(223, 31%, 20%)",
    screenBack: "hsl(224, 36%, 15%)",
    delResetKeyBack: "hsl(225, 21%, 49%)",
    delResetKeyShadow: "hsl(224, 28%, 35%)",
    equalKeyBack: "hsl(6, 63%, 50%)",
    equalKeyShadow: "hsl(6, 70%, 34%)",
    keyBack: "hsl(30, 25%, 89%)",
    keyShadow: "hsl(28, 16%, 65%)",
    keyTextColor: "hsl(221, 14%, 31%)",
    delResetEqualKeyTextColor: "hsl(0, 100%, 100%)",
    displayText: "hsl(30, 25%, 89%)",
  },
  2: {
    id: 2,
    mainBack: "hsl(0, 0%, 90%)",
    keypadBack: "hsl(0, 5%, 81%)",
    screenBack: "hsl(0, 0%, 93%)",
    delResetKeyBack: "hsl(185, 42%, 37%)",
    delResetKeyShadow: "hsl(185, 58%, 25%)",
    equalKeyBack: "hsl(25, 98%, 40%)",
    equalKeyShadow: "hsl(25, 99%, 27%)",
    keyBack: "hsl(45, 7%, 89%)",
    keyShadow: "hsl(35, 11%, 61%)",
    keyTextColor: "hsl(60, 10%, 19%)",
    delResetEqualKeyTextColor: "hsl(0, 100%, 100%)",
    displayText: "hsl(60, 10%, 19%)",
  },
  3: {
    id: 3,
    mainBack: "hsl(268, 75%, 9%)",
    keypadBack: "hsl(268, 71%, 12%)",
    screenBack: "hsl(268, 71%, 12%)",
    delResetKeyBack: "hsl(281, 89%, 26%)",
    delResetKeyShadow: "hsl(285, 91%, 52%)",
    equalKeyBack: "hsl(176, 100%, 44%)",
    equalKeyShadow: "hsl(177, 92%, 70%)",
    keyBack: "hsl(268, 47%, 21%)",
    keyShadow: "hsl(290, 70%, 36%)",
    keyTextColor: "hsl(52, 100%, 62%)",
    delResetEqualKeyTextColor: "hsl(0, 100%, 100%)",
    displayText: "hsl(52, 100%, 62%)",
  },
};

// # Front-end Style Guide

// ## Layout

// The designs were created to the following widths:

// - Mobile: 375px
// - Desktop: 1440px

// ## Colors

// ### Theme 1

// #### Backgrounds

// - Very dark desaturated blue (main background): hsl(222, 26%, 31%)
// - Very dark desaturated blue (toggle background, keypad background): hsl(223, 31%, 20%)
// - Very dark desaturated blue (screen background): hsl(224, 36%, 15%)

// #### Keys

// - Desaturated dark blue (key background): hsl(225, 21%, 49%)
// - Desaturated dark blue (key shadow): hsl(224, 28%, 35%)

// - Red (key background, toggle): hsl(6, 63%, 50%)
// - Dark red (key shadow): hsl(6, 70%, 34%)

// - Light grayish orange (key background): hsl(30, 25%, 89%)
// - Grayish orange (key shadow): hsl(28, 16%, 65%)

// #### Text

// - Very dark grayish blue: hsl(221, 14%, 31%)
// - White: hsl(0, 0, 100%)

// ### Theme 2

// #### Backgrounds

// - Light gray (main background): hsl(0, 0%, 90%)
// - Grayish red (toggle background, keypad background): hsl(0, 5%, 81%)
// - Very light gray (screen background): hsl(0, 0%, 93%)

// #### Keys

// - Dark moderate cyan (key background): hsl(185, 42%, 37%)
// - Very dark cyan (key shadow): hsl(185, 58%, 25%)

// - Orange (key background, toggle): hsl(25, 98%, 40%)
// - Dark orange (key shadow): hsl(25, 99%, 27%)

// - Light grayish yellow (key background): hsl(45, 7%, 89%)
// - Dark grayish orange (key shadow): hsl(35, 11%, 61%)

// #### Text

// - Very dark grayish yellow: hsl(60, 10%, 19%)
// - White (text): hsl(0, 0, 100%)

// ### Theme 3

// #### Backgrounds

// - Very dark violet (main background): hsl(268, 75%, 9%)
// - Very dark violet (toggle background, keypad background, screen background): hsl(268, 71%, 12%)

// #### Keys

// - Dark violet (key background): hsl(281, 89%, 26%)
// - Vivid magenta (key shadow): hsl(285, 91%, 52%)

// - Pure cyan (key background, toggle): hsl(176, 100%, 44%)
// - Soft cyan (key shadow): hsl(177, 92%, 70%)

// - Very dark violet (key background): hsl(268, 47%, 21%)
// - Dark magenta (key shadow): hsl(290, 70%, 36%)

// #### Text

// - Light yellow: hsl(52, 100%, 62%)
// - Very dark blue: hsl(198, 20%, 13%)
// - White (text): hsl(0, 0, 100%)

// ## Typography

// ### Body Copy

// - Font size (numbers): 32px

// ### Font

// - Family: [Spartan](https://fonts.google.com/specimen/Spartan)
// - Weights: 700
