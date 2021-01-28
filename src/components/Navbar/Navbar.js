import { NavLink } from 'react-router-dom';
import { auth } from '../../firebase';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <nav className='sticky top-0 flex justify-center p-4 border-b border-black bg-white z-50'>
      <div className='flex justify-between w-full max-w-screen-xl'>
        <h1 className='text-3xl font-medium cursor-pointer font-roboto'>
          <NavLink to='/'>
            <span className='font-medium text-blue-600'>LFG</span>
            <span className='font-light'>roup</span>
          </NavLink>
        </h1>
        <ul className='flex justify-end items-center cursor-pointer font-roboto'>
          {user ? (
            <li className='mx-2'>
              <button type='button' onClick={() => auth.signOut()}>
                Logout
              </button>
            </li>
          ) : (
            <li className='mx-2'>
              <NavLink to='/login' activeClassName='font-bold'>
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
