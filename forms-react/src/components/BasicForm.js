import { useState } from "react";
import useInput1 from "../hooks/use-input1";

const BasicForm = (props) => {

    const {
        value: enteredFName,
        isValid: fNameIsValid,
        hasError: fNameHasError,
        valueChangeHandler: fNameChangeHandler,
        inputBlurHandler: fNameBlurHandler,
        reset: resetFNameInput,
    } = useInput1(value => value.trim() !== '');

    const {
        value: enteredLName,
        isValid: lNameIsValid,
        hasError: lNameHasError,
        valueChangeHandler: lNameChangeHandler,
        inputBlurHandler: lNameBlurHandler,
        reset: resetLNameInput,
    } = useInput1(value => value.trim() !== '');

    const {
        value: enteredEmail,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput1(value => value.includes('@'));

    let formIsValid = false;
    if(fNameIsValid && lNameIsValid && emailIsValid) {
        formIsValid = true;
    }

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if(!formIsValid) {
      return;
    }
    
    resetFNameInput();
    resetLNameInput();
    resetEmailInput();
  }

  const fNameInputClasses = fNameHasError ? 'form-control invalid' : 'form-control';
  const lNameInputClasses = lNameHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={fNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={enteredFName} onChange={fNameChangeHandler} onBlur={fNameBlurHandler} />
          {fNameHasError && <p className="error-text">First Name must not be empty.</p>}
        </div>
        <div className={lNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={enteredLName} onChange={lNameChangeHandler} onBlur={lNameBlurHandler} />
          {lNameHasError && <p className="error-text">Last Name must not be empty.</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
        {emailHasError && <p className="error-text">Email must contain @.</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
