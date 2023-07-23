import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';           //infered/derived variable from state.
  const enteredEmailIsValid = enteredEmail.includes('@');
  const nameInputIsInvalid = enteredNameTouched && !enteredNameIsValid;
  const emailInputIsInvalid = enteredEmailTouched && !enteredEmailIsValid;    // show error

  let formIsValid = false;
  
  if(enteredNameIsValid && enteredEmailIsValid) {       //Lost focus is not required for overall form validation.
      formIsValid = true;
  } else {    //atleast one of inputs is invalid
      formIsValid = false;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  }
  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // setEnteredNameTouched(true);
    // setEnteredEmailTouched(true);

    // to cancel the form submission if the input is invalid,
    if(!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    console.log(enteredName);
    setEnteredName('');
    setEnteredEmail('');
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  }
  
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} value={enteredName}/>
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input type='text' id='email' onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} value={enteredEmail}/>
        {emailInputIsInvalid && <p className="error-text">Email must contain @.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
