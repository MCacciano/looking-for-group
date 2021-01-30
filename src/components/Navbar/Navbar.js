import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from '../../firebase';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(prev => !prev);
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className='sticky top-0 flex justify-center p-4 border-b border-black bg-white font-roboto z-50'>
      <div className='flex justify-between w-full max-w-screen-xl'>
        <h1 className='text-3xl font-medium cursor-pointer'>
          <NavLink to='/'>
            <span className='font-medium'>LFG</span>
            <span className='font-light'>roup</span>
          </NavLink>
        </h1>
        {user ? (
          <div className='flex flex-col h-10 w-10 rounded-full shadow cursor-pointer'>
            <img
              onClick={toggleOpen}
              className='w-full h-full'
              src={user.avatar}
            />
            {isOpen ? (
              <ul
                className='absolute top-14 right-2 bg-white border-2 border-black mt-4 w-1/6'
                onClick={toggleOpen}
              >
                <li className='border-b border-black'>
                  <NavLink
                    to='/dashboard'
                    className='p-2 block h-full'
                    activeClassName='font-bold bg-black text-white'
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li className='border-b border-black'>
                  <NavLink
                    to='/players'
                    className='p-2 block h-full'
                    activeClassName='font-bold bg-black text-white'
                  >
                    Players
                  </NavLink>
                </li>
                <li>
                  <button
                    className='flex justify-start items-center w-full h-full p-2'
                    type='button'
                    onClick={signOut}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            ) : null}
          </div>
        ) : (
          <NavLink
            to='/login'
            className='flex h-full items-center mx-2 text-lg'
            activeClassName='font-bold'
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
