import PropTypes from 'prop-types';
import PlayerListItem from './PlayerListItem';

const PlayerList = ({ players }) => {
  return (
    <ul>
      {players.map(player => (
        <PlayerListItem key={player.id} {...player} />
      ))}
    </ul>
  );
};

PlayerList.defaultProps = {
  players: []
};

PlayerList.propTypes = {
  players: PropTypes.array
};

export default PlayerList;
