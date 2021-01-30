import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { firestore } from '../../firebase';

import PlayerList from '../../components/PlayerList';

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const playersRef = await firestore.collection('users');

        const snapShot = await playersRef
          .where('isLookingForGroup', '==', true)
          .get();

        snapShot.forEach(doc => {
          console.log('doc.data() :>> ', doc.data());
        });

        setPlayers(snapShot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (err) {
        console.error(err);
      }
    };

    getPlayers();
  }, []);

  return (
    <div>
      <PlayerList players={players} />
    </div>
  );
};

Players.defaultProps = {
  players: []
};

Players.propTypes = {
  players: PropTypes.array
};

export default Players;
