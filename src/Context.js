import { useState, createContext, useEffect } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [selection, setSelection] = useState(1); // this state controls wich theme is displayed
  const [display, setDisplay] = useState(""); //this state is in charge of displaying the operations in our calculators screen
  const [currVal, setCurrVal] = useState(""); // saves the current value we are going to compute
  const [prevVal, setPrevVal] = useState(""); // saves the previous value we are going to compute
  const [operations, setOperations] = useState(""); // this state saves the current operation we need to do

  //here i assign the chosen theme to selection
  function handleTheme(id) {
    setSelection(id);
  }

  function computation(value = "") {
    let operationCurrValPrevVal = 0; //new variable that will store the operation between currVall and prevVal
    const prevValNumber = parseFloat(prevVal);
    const currValNumber = parseFloat(currVal); // since we are using string to concatenate all of our values i need to transform them into numbers in order to compute them
    if (isNaN(prevValNumber) || isNaN(currValNumber)) return; //if currVal and prevVal are not numbers we terminate the case to prevent an expression like this (110 + "") from being executed
    switch (operations) {
      //if both values are numbers we compute them according to the operation selected in operations state
      case "+":
        operationCurrValPrevVal = prevValNumber + currValNumber;
        break;
      case "-":
        operationCurrValPrevVal = prevValNumber - currValNumber;
        break;
      case "*":
        operationCurrValPrevVal = prevValNumber * currValNumber;
        break;
      case "/":
        operationCurrValPrevVal = prevValNumber / currValNumber;
        break;
      default:
        // if any other key that is not an operation it will either keep concatenating the current value of terminate this case
        return;
    }
    if (!value) {
      // if we press = to get our result we will have no operation value therefore we set our currVal as the result of our operation bacause if we dont do that we will have as states currVal="" operation="" and prevVal=operationcurrValprevVal wich will not let us select an operation since currVal is empty. The opposite case is if we get the result from pressing operation we get currVal="" operation=operation and prevVal=number wich leave us set up to choose next number and prevent us from being stuck in the condition  (if (currVal === "") return) from operation case.
      setCurrVal(String(operationCurrValPrevVal));
      setOperations(value);
      setPrevVal("");
      setDisplay(operationCurrValPrevVal + value);
      return;
    }
    setCurrVal(""); // operationcurrvalprevval is stored in currVal as the new current value in case we want to keep doing operations
    setOperations(value); // if we execute computation() from the operation case we will pass value as the new operation for the next computation, if computation() is executed from the = case we will not pass any value settin the operation to an empty string
    setPrevVal(String(operationCurrValPrevVal)); // we set prevVal to an empty string to make room for the next value we will compute
    setDisplay(operationCurrValPrevVal + value); // if we executed computation from the operation case the new operation (value) will concatenate to our display for the next computation
  }

  function handleKeyPress(value) {
    switch (value) {
      case "DEL":
        if (currVal) {
          // if currVal has a value we will be able to delete the number
          setDisplay((prevState) => prevState.slice(0, -1));
          setCurrVal((prevState) => prevState.slice(0, -1));
        }
        break;
      case "RESET": // if you press reset all the states will return to their initial value
        setDisplay("");
        setOperations("");
        setCurrVal("");
        setPrevVal("");
        break;
      case "=": // if we press the = button computation will be executed as well
        computation();
        break;
      case "+":
      case "*":
      case "-":
      case "/":
        if (currVal === "") return; // if currVal is empty you cannnot select an operation and this case will be terminated
        setDisplay((prevState) => prevState + value);
        if (prevVal !== "") {
          //if case was not terminated because currVal had a value and prevVal has also a value we compute both values with operation selected to update our display with this operation executing computation()
          return computation(value);
        }
        setOperations(value); // if preVal is empty we assign the operation (value) to our state operations
        setPrevVal(currVal); // since we are creating a new operation we store our currVal in prevVal to store our new number in currVal and have two numbers that we can use to compute (operationCurrValPrevVal)
        setCurrVal(""); // i set currVal to empty string to make room for new number
        break;
      default:
        // this code will execute if we press a number or point key
        if (currVal.includes(".") && value === ".") return; // if display already has a point and our current pressed key (value) is a point we dont concatenate anything
        setDisplay((prevState) => prevState + value); // i concatenate all pressed number in display
        setCurrVal((prevState) => prevState + value); // all numbers all concatenaded in currVal before selecting the type of operation the program will execute
    }
  }

  // iuse useeffect to save the theme selected by the user and load it anytime the page is refreshed
  useEffect(() => {
    const data = localStorage.getItem("my-theme");
    if (data) {
      setSelection(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("my-theme", JSON.stringify(selection));
  });

  // in value i store all the states i will use for the programs logic
  return (
    <Context.Provider
      value={{
        handleTheme,
        selection,
        handleKeyPress,
        display,
      }}
    >
      {children}
    </Context.Provider>
  );
}

//exporting the provider of context and our full context object to use with useContext

export { ContextProvider, Context };
