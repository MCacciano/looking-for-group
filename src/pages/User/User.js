import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const User = () => {
    const {
        state: { user },
    } = useLocation();

    if (!user) return null;

    const { displayName } = user;

    return (
        <div>
            <h1>{displayName}</h1>
        </div>
    );
};

export default User;
