import PropTypes from 'prop-types';

import VillagerListItem from './VillagerListItem';

const VillagerList = ({ villagers }) => {
  return (
    <ul className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 p-5'>
      {villagers.map(villager => {
        return <VillagerListItem key={villager.id} villager={villager} />;
      })}
    </ul>
  );
};

VillagerList.defaultProps = {
  villgers: []
};

VillagerList.propTypes = {
  villagers: PropTypes.array
};

export default VillagerList;
