import { useEffect } from 'react';
import acnhApi from '../../axios/acnhApi';
import VillagerList from '../../components/VillagerList/VillagerList';
import useGlobalContext from '../../hooks/useGlobalContext';

const Villagers = () => {
  const { allVillagers, setAllVillagers } = useGlobalContext();

  useEffect(() => {
    const getVillagers = async () => {
      try {
        const { data } = await acnhApi.get('/villagers');
        data.sort((a, b) =>
          a.name['name-USen'].localeCompare(b.name['name-USen'])
        );
        setAllVillagers(data);
      } catch (err) {
        console.error(err);
      }
    };
    getVillagers();
  }, []);

  return (
    <div>
      <VillagerList villagers={allVillagers} />
    </div>
  );
};

export default Villagers;
