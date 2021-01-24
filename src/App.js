import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth } from './firebase';

import useGlobalContext from './hooks/useGlobalContext';

// components
import Navbar from './components/Navbar/Navbar';

// pages
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
  const { setUser } = useGlobalContext();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) setUser(user);

    const unsub = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        const { displayName, email, uid } = authUser;

        setUser({ displayName: displayName || email, email, uid });
      } else {
        localStorage.removeItem('user');
        setUser(null);
      }
    });

    return unsub;
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/' login component={Login} />
      </Switch>
    </>
  );
};

export default App;
