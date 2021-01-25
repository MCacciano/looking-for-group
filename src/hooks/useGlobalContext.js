import { SET_USER, SET_ALL_VILLAGERS } from '../context/global/types';
import { useGlobalState, useGlobalDispatch } from '../context/global';

const useGlobalContext = () => {
  const state = useGlobalState();
  const dispatch = useGlobalDispatch();

  const setUser = (user = null) => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user.id));
    }
    dispatch({ type: SET_USER, payload: user });
  };

  const setAllVillagers = villagers => {
    dispatch({ type: SET_ALL_VILLAGERS, payload: villagers });
  };

  return { state, ...state, setUser, setAllVillagers };
};

export default useGlobalContext;
