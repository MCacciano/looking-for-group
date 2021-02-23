import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from '../../firebase';
import useUserContext from '../../hooks/useUserContext';

import Button from '../Button';

// TODO: Add close on click outside functionality

const Navbar = () => {
    const { user } = useUserContext();

    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { to: '/dashboard', label: 'Dashboard' },
        { to: '/finder', label: 'Finder' },
    ];

    const toggleOpen = () => {
        setIsOpen(prev => !prev);
    };

    const signOut = () => {
        auth.signOut();
    };

    useEffect(() => {
        if (user) {
            console.log('user.currentUser :>> ', user);
        }
    }, [user]);

    return (
        <nav className='sticky top-0 flex justify-center p-4 border-b border-black bg-white font-roboto z-50'>
            <div className='flex justify-between w-full max-w-screen-xl relative'>
                <h1 className='text-3xl font-medium cursor-pointer'>
                    <NavLink to='/'>
                        <span className='font-medium'>LFG</span>
                        <span className='font-light'>roup</span>
                    </NavLink>
                </h1>
                {user ? (
                    <div className='flex flex-col shadow cursor-pointer rounded-full'>
                        <button
                            onClick={toggleOpen}
                            className='focus:outline-none'
                        >
                            <img
                                className='w-10 h-10 rounded-full'
                                src={user.avatar}
                            />
                        </button>
                        {isOpen ? (
                            <ul
                                className='min-w-max absolute top-full right-0 mt-4 bg-white border-2 border-black'
                                onClick={toggleOpen}
                            >
                                {navLinks.map(({ to, label }) => (
                                    <li className='border-b border-black'>
                                        <NavLink
                                            to={to}
                                            className='p-2 block h-full pr-5'
                                            activeClassName='font-bold bg-black text-white'
                                        >
                                            {label}
                                        </NavLink>
                                    </li>
                                ))}
                                <li>
                                    <Button
                                        intent='transparent'
                                        className='flex justify-start items-center w-full h-full p-2 border-none'
                                        onClick={signOut}
                                    >
                                        Logout
                                    </Button>
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
