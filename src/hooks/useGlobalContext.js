import { SET_USER } from '../context/global/types';
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

  return { state, ...state, setUser };
};

export default useGlobalContext;
