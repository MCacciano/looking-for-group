import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from '../../firebase';

import defaultUser from '../../images/default-user-icon-2.jpg';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [isOpen, setIsOpen] = useState(false);

  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className='sticky top-0 flex justify-center p-4 border-b border-black bg-white z-50'>
      <div className='flex justify-between w-full max-w-screen-xl'>
        <h1 className='text-3xl font-medium cursor-pointer font-roboto'>
          <NavLink to='/'>
            <span className='font-medium'>LFG</span>
            <span className='font-light'>roup</span>
          </NavLink>
        </h1>
        <div className='font-roboto'>
          {user ? (
            <div className='flex flex-col h-10 w-10 rounded-full shadow cursor-pointer'>
              {/* <NavLink to='/dashboard' activeClassName='font-bold'>
                <img className='w-full h-full' src={defaultUser} />
              </NavLink> */}
              <img
                onClick={() => setIsOpen(prev => !prev)}
                className='w-full h-full'
                src={defaultUser}
              />
              {isOpen ? (
                <ul
                  className='absolute top-14 right-2 border-2 border-black mt-4 w-1/6'
                  onClick={() => setIsOpen(prev => !prev)}
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
                  <li className='p-2'>
                    <button type='button' onClick={signOut}>
                      Logout
                    </button>
                  </li>
                </ul>
              ) : null}
            </div>
          ) : (
            <NavLink to='/login' className='mx-2' activeClassName='font-bold'>
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
