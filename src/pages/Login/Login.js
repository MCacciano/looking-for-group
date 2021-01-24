import { Redirect } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';
import SignUpform from '../../components/SignUpForm';

const Login = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return user ? (
    <Redirect to='/' />
  ) : (
    <div className='absolute inset-0 w-screen h-screen'>
      <div>
        <LoginForm className='my-4 md:my-0  ' />
        <SignUpform className='my-4 md:my-0 ' />
      </div>
    </div>
  );
};

export default Login;
