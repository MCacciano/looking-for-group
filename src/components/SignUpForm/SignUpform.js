import { useState } from 'react';
import PropTypes from 'prop-types';
import { auth, createUserProfileDocument } from '../../firebase';

const SignUpform = ({ className = '' }) => {
  const [signUpForm, setSignUpform] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleOnChange = e => {
    const { name, value } = e.currentTarget;

    setSignUpform(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = signUpForm;

    if (password !== confirmPassword) {
      console.error('passwords dont match create a toast for this');
      return;
    }

    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    await createUserProfileDocument(user, { displayName });
  };

  const inputClasses = `border border-black rounded shadow p-2 mb-2`;

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col items-center p-2 justify-between border border-black shadow rounded ${className}`}
    >
      <div className='flex justify-center my-4'>
        <h1 className='text-3xl font-medium'>Sign Up</h1>
      </div>
      <label htmlFor='sign_up_displayName' className='flex flex-col mb-1'>
        Display Name:
        <input
          className={inputClasses}
          type='text'
          name='displayName'
          id='sign_up_displayName'
          value={signUpForm.displayName}
          onChange={handleOnChange}
        />
      </label>
      <label htmlFor='sign_up_email' className='flex flex-col mb-1'>
        Email:
        <input
          className={inputClasses}
          type='email'
          name='email'
          id='sign_up_email'
          value={signUpForm.email}
          onChange={handleOnChange}
        />
      </label>
      <label htmlFor='sign_up_password' className='flex flex-col mb-1'>
        Password:
        <input
          className={inputClasses}
          type='password'
          name='password'
          id='sign_up_password'
          value={signUpForm.password}
          onChange={handleOnChange}
        />
      </label>
      <label htmlFor='sign_up_confirm_password' className='flex flex-col mb-1'>
        Confirm Password:
        <input
          className={inputClasses}
          type='password'
          name='confirmPassword'
          id='sign_up_confirm_password'
          value={signUpForm.confirmPassword}
          onChange={handleOnChange}
        />
      </label>
      <div className='flex flex-col w-full'>
        <button
          type='submit'
          className='bg-black text-white rounded shadow font-normal p-1 my-1'
        >
          Sign Up
        </button>
        <button type='button' className='invisible'>
          Sign In With Google
        </button>
      </div>
    </form>
  );
};

SignUpform.propTypes = {
  className: PropTypes.string
};

export default SignUpform;
