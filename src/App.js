import { useEffect, useState } from 'react';
import acnhApi from './axios/acnhApi';
import { auth, signInWithGoogle } from './firebase';
import useGlobalContext from './hooks/useGlobalContext';

const App = () => {
  const { user, allVillagers, setUser, setAllVillagers } = useGlobalContext();

  useEffect(() => {
    const getVillagers = async () => {
      try {
        const { data } = await acnhApi.get('/villagers');

        data.sort((a, b) => {
          return a.name['name-USen'].localeCompare(b.name['name-USen'], 'en');
        });

        setAllVillagers(data);
      } catch (err) {
        console.error(err);
      }
    };

    getVillagers();

    const unsub = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        const { displayName, email, uid } = authUser;

        setUser({ displayName: displayName || email, email, uid });
      } else {
        setUser(null);
      }
    });

    return unsub;
  }, []);

  useEffect(() => {
    console.log('user :>> ', user);
  }, [user]);

  return (
    <div className='m-4'>
      <button
        type='button'
        onClick={signInWithGoogle}
        className='text-white border border-black bg-blue-600 cursor-pointer shadow p-2 mr-6 rounded'
      >
        Sign In With Google
      </button>
      <button
        type='button'
        onClick={() => auth.signOut()}
        className='text-white border border-black bg-red-600 cursor-pointer shadow p-2 rounded'
      >
        Logout
      </button>
      <ul className='grid grid-cols-4 gap-6 list-none'>
        {allVillagers.map(({ name, icon_uri, image_uri }) => (
          <li
            key={name['name-USen']}
            className='flex flex-col items-center border border-gray-500 rounded shadow p-2 bg-gray-100'
          >
            <div>
              <img src={icon_uri} />
            </div>
            <h2>{name['name-USen']}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
