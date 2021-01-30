import { SET_SERVERS, SET_USER } from '../context/global/types';
import { useGlobalState, useGlobalDispatch } from '../context/global';

const useGlobalContext = () => {
  const state = useGlobalState();
  const dispatch = useGlobalDispatch();

  const setUser = (user = null) => {
    if (user) {
      localStorage.setItem(
        'user',
        JSON.stringify({ id: user.id, avatar: user.avatar })
      );
    }
    dispatch({ type: SET_USER, payload: user });
  };

  const setServers = servers => {
    dispatch({ type: SET_SERVERS, payload: servers });
  };

  return { state, ...state, setUser, setServers };
};

export default useGlobalContext;
