import PropTypes from 'prop-types';

const VillagerListItem = ({ villager }) => {
  const { name, icon_uri, image_uri } = villager;

  // console.log('villager :>> ', villager);

  return (
    <li
      style={{ backgroundColor: '#fafafa' }}
      className='flex flex-col items-center border border-gray-400 rounded shadow'
    >
      <img src={icon_uri} alt='villager icon' />
      <h1 className='font-yuseiMagic'>{name['name-USen']}</h1>
    </li>
  );
};

VillagerListItem.propsTyps = {
  villager: PropTypes.object
};

export default VillagerListItem;
