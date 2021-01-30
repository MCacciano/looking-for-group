import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ isAuth = false, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return isAuth ? (
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
