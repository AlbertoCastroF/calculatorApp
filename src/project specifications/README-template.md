# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![Theme 1](./public/images/theme1.png)
![Theme 2](./public/images/theme2.png)
![Theme 3](./public/images/theme3.png)

### Links

- Solution URL: [GITHUB](https://github.com/AlbertoCastroF/calculatorApp)
- Live Site URL: [LIVE SITE](https://albertocastrof.github.io/calculatorApp/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Compound Components
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

I decided to use React for this project because i wanted to get more practice with the library and because i thougth i would be easier to handle the theme change with it. Some of the new things i learned were that i can use input as a display with the read-only properti but at the end decided to use a <div> element because it was easier, i also learned how i can save state in local storage to use it to keep changes made to the site. This is the first project in wich i applied Theme provider and i was blown by how practical and useful it is because we can pass properties through the theme prop and use them in styled components. I will definitely use it again.

### Useful resources

- [Theme Provider](https://www.youtube.com/watch?v=G00V4tRx1ME&t=372s&ab_channel=WillCodeForViews) - This video showed me how to use theme provider.
- [Persist state to local storage](https://www.youtube.com/watch?v=fTP2gi7e3k8&ab_channel=BenAwad) - This video showed me how to use persist state in local storage.

## Author

- Website - [Alberto Castro Flores](https://www.linkedin.com/in/alberto-castro-flores-02007959/)
- Frontend Mentor - [@AlbertoCastroF](https://www.frontendmentor.io/profile/AlbertoCastroF)

## Acknowledgments

I want to thank frontend mentor slack community for helping me in my search for knowledge 🙏

- [Frontend mentor slack community](https://www.frontendmentor.io/slack)
