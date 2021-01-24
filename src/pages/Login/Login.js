import { useState } from 'react';
import { Redirect } from 'react-router-dom';

import LoginForm from '../../components/LoginForm';
import SignUpform from '../../components/SignUpForm';

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);
  const user = JSON.parse(localStorage.getItem('user'));

  return user ? (
    <Redirect to='/' />
  ) : (
    <div className='w-full h-full flex flex-col md:flex-row justify-center items-center'>
      <div className='w-full max-w-screen-lg flex justify-around'>
        {showLogin ? (
          <LoginForm
            className='my-4 md:my-0'
            onToggleForm={() => setShowLogin(prev => !prev)}
          />
        ) : (
          <SignUpform
            className='my-4 md:my-0'
            onToggleForm={() => setShowLogin(prev => !prev)}
          />
        )}
      </div>
    </div>
  );
};

export default Login;
