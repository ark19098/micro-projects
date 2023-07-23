import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';           //infered/derived variable from state.
  const nameInputIsInvalid = enteredNameTouched && !enteredNameIsValid;

  useEffect(() => {
    if(enteredNameIsValid) {
        setFormIsValid(true);
    } else {    //atleast one of inputs is invalid
        setFormIsValid(false);
    }
    
  }, [enteredNameIsValid]);
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    // to cancel the form submission if the input is invalid,
    if(!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    setEnteredName('');
    setEnteredNameTouched(false);
  }
  
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} value={enteredName}/>
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

/**
 * We don't even need useEffect.

We're not performing any side effect in there.

We're doing nothing that would be a problem

if we would do it without using useEffect.

All we're doing is deriving a new value

just as we're already doing it in lines eight and nine.

with entered name is valid and name input is invalid.

it just adds extra component re-evaluation cycles.
 */