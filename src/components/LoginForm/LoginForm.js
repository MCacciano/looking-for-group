import { useState } from 'react';
import PropTypes from 'prop-types';
import { auth, signInWithGoogle } from '../../firebase';

const LoginForm = ({ className = '' }) => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const handleOnChange = e => {
    const { name, value } = e.currentTarget;

    setLoginForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    await auth.signInWithEmailAndPassword(loginForm.email, loginForm.password);
  };

  const inputClasses = `border border-black rounded shadow p-2 mb-2`;

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col items-center p-2 justify-between border border-black shadow rounded ${className}`}
    >
      <div className='flex justify-center my-4'>
        <h1 className='text-3xl font-medium'>Login</h1>
      </div>
      <label htmlFor='email' className='flex flex-col mb-1'>
        Email:
        <input
          className={inputClasses}
          type='email'
          name='email'
          id='email'
          onChange={handleOnChange}
        />
      </label>
      <label htmlFor='password' className='flex flex-col mb-1'>
        Password:
        <input
          className={inputClasses}
          type='password'
          name='password'
          id='password'
          onChange={handleOnChange}
        />
      </label>
      <div className='flex flex-col w-full'>
        <button
          type='submit'
          className='bg-black text-white rounded shadow font-normal p-1 my-1'
        >
          Log In
        </button>
        <button
          type='button'
          onClick={signInWithGoogle}
          className='text-white border border-black bg-red-700 p-1 my-1 cursor-pointer shadow rounded font-normal'
        >
          Sign In With Google
        </button>
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  className: PropTypes.string
};

export default LoginForm;
