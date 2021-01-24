import { signInWithGoogle } from '../../firebase';

const Login = () => {
  return (
    <div>
      <button
        type='button'
        onClick={signInWithGoogle}
        className='text-white border border-black bg-blue-600 cursor-pointer shadow p-2 mr-6 rounded'
      >
        Sign In With Google
      </button>
    </div>
  );
};

export default Login;
