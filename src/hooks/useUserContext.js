import { SET_USER } from '../context/global/types';
import { useUserState, useUserDispatch } from '../context/user';

const useUserContext = () => {
    const state = useUserState();
    const dispatch = useUserDispatch();

    const setUser = (user = null) => {
        if (user) {
            localStorage.setItem(
                'user',
                JSON.stringify({ id: user.id, avatar: user.avatar })
            );
        }
        dispatch({ type: SET_USER, payload: user });
    };

    return { state, ...state, setUser };
};

export default useUserContext;
