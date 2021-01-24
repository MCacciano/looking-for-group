import PropTypes from 'prop-types';

const VillagerListItem = ({ villager }) => {
  const { name, icon_uri } = villager;

  // console.log('villager :>> ', villager);

  return (
    <li className='flex flex-col items-center border border-gray-400 bg-gray-100 rounded shadow'>
      <img src={icon_uri} alt='villager icon' />
      <h1 className='font-yuseiMagic'>{name['name-USen']}</h1>
    </li>
  );
};

VillagerListItem.propsTyps = {
  villager: PropTypes.object
};

export default VillagerListItem;
