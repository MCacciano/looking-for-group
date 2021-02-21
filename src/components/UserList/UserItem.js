import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {
    const { avatar, displayName, id } = user;

    useEffect(() => console.log('user', user), [user]);
    return (
        <li className='m-4'>
            <Link
                to={{ pathname: `/user/${id}`, state: { user } }}
                className='flex w-full h-full justify-start'
            >
                <div className='h-24 w-24 bg-red-100'>
                    <img src={avatar} alt='avatar' />
                </div>
                <div className='flex-1 p-4 bg-blue-100'>
                    <h2>{displayName}</h2>
                </div>
            </Link>
        </li>
    );
};

UserItem.propTypes = {
    user: PropTypes.object,
};

export default UserItem;
