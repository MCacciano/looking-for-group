import PropTypes from 'prop-types';

const PlayerListItem = ({ avatar, displayName }) => {
  return (
    <li className='flex justify-start m-4'>
      <div className='h-24 w-24 bg-red-100'>
        <img src={avatar} alt='avatar' />
      </div>
      <div className='flex-1 p-4 bg-blue-100'>
        <h2>{displayName}</h2>
      </div>
    </li>
  );
};

PlayerListItem.propTypes = {
  player: PropTypes.object
};

export default PlayerListItem;
