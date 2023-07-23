import { useState } from "react";

const BasicForm = (props) => {
  
  const [enteredFName, setEnteredFName] = useState('');
  const [fNameTouched, setFNameTouched] = useState(false);

  const [enteredLName, setEnteredLName] = useState('');
  const [lNameTouched, setLNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);

  const fNameIsValid = enteredFName.trim() !== '';
  const fNameHasError = fNameTouched && !fNameIsValid;

  const lNameIsValid = enteredLName.trim() !== '';
  const lNameHasError = lNameTouched && !lNameIsValid;

  const emailIsValid = enteredEmail.includes('@');
  const emailHasError = emailTouched && !emailIsValid;

  let formIsValid = false;
  if(fNameIsValid && lNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const fNameChangeHandler = (e) => {
    setEnteredFName(e.target.value);
  }
  const fNameBlurHandler = (e) => {
    setFNameTouched(true);
  }
  const lNameChangeHandler = (e) => {
    setEnteredLName(e.target.value);
  }
  const lNameBlurHandler = (e) => {
    setLNameTouched(true);
  }
  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  }
  const emailBlurHandler = (e) => {
    setEmailTouched(true);
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if(!formIsValid) {
      return;
    }
    setEnteredFName('');
    setEnteredLName('');
    setEnteredEmail('');

    setFNameTouched(false);
    setLNameTouched(false);
    setEmailTouched(false);

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
