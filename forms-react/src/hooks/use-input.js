import { useState } from 'react'

// validateValue is a function(anonymous) passed from hook user component to be executed here.
const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);           //infered/derived variable from state.
    const hasError = isTouched && !valueIsValid;                //infered/derived variable from two other variables.

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }
    const inputBlurHandler = (event) => {
        setIsTouched(true);
    }
    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  }
}

export default useInput;
