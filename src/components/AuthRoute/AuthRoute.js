import { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

import useGlobalContext from '../../hooks/useGlobalContext';

const AuthRoute = ({ component: Component, ...rest }) => {
  const { user } = useGlobalContext();

  useEffect(() => {
    console.log('user :>> ', user);
  }, [user]);

  return (
    <Route
      {...rest}
      render={props => {
        return user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        );
      }}
    />
  );
};

export default AuthRoute;
