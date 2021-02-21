import { useEffect, useState } from 'react';

import { firestore } from '../../firebase';

import UserList from '../../components/UserList';

const Finder = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getPlayers = async () => {
            try {
                const usersRef = await firestore.collection('users');

                // .where('isLookingForGroup', '==', true)
                const snapShot = await usersRef.get();

                setUsers(
                    snapShot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                );
            } catch (err) {
                console.error(err);
            }
        };

        getPlayers();
    }, []);

    return (
        <div>
            <UserList users={users} />
        </div>
    );
};

export default Finder;
