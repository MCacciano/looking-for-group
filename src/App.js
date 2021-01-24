import { useEffect, useState } from 'react';
import acnhApi from './axios/acnhApi';
import { auth, signInWithGoogle } from './firebase';

const App = () => {
  const [user, setUser] = useState(null);
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        console.log('authUser :>> ', authUser);
      } else {
        setUser(null);
      }
    });

    return unsub;
  }, []);

  // useEffect(() => {
  //   const getVillagers = async () => {
  //     try {
  //       const { data } = await acnhApi.get('/villagers');
  //       console.log('data :>> ', data);
  //       data.sort((a, b) => a.name['name-USen'].localeCompare(b.name['name-USen'], 'en'));
  //       setVillagers(data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   getVillagers();

  //   return null;
  // }, []);

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
        {villagers.map(({ name, icon_uri, image_uri }) => (
          <li className='flex flex-col items-center border border-gray-500 rounded shadow p-2 bg-gray-100'>
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
