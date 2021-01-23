import { useEffect, useState } from 'react';
import acnhApi from './axios/acnhApi';

const App = () => {
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    const getVillagers = async () => {
      try {
        const { data } = await acnhApi.get('/villagers');
        console.log('data :>> ', data);
        data.sort((a, b) => a.name['name-USen'].localeCompare(b.name['name-USen'], 'en'));
        setVillagers(data);
      } catch (err) {
        console.error(err);
      }
    };

    getVillagers();

    return null;
  }, []);

  return (
    <div className='m-4'>
      <div className='grid grid-cols-4 gap-6'>
        {villagers.map(({ name, icon_uri, image_uri }) => (
          <div className='flex flex-col items-center border border-gray-500 rounded shadow p-2 bg-gray-100'>
            <div>
              <img src={image_uri} />
              <img src={icon_uri} />
            </div>
            <h2>{name['name-USen']}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
