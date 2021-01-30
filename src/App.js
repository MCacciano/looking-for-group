import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase';

import useGlobalContext from './hooks/useGlobalContext';

// components
import AuthRoute from './components/AuthRoute';
import Navbar from './components/Navbar/Navbar';

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Players from './pages/Players';

const App = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const { setUser } = useGlobalContext();

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(async authUser => {
      if (authUser) {
        try {
          const userRef = await createUserProfileDocument(authUser);

          userRef.onSnapshot(snapShot => {
            setUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
        } catch (err) {
          console.error(err);
        }
      } else {
        localStorage.removeItem('user');
        setUser(null);
      }
    });

    return unsub;
    // eslint-disable-next-line
  }, []);

  return (
    <div className='flex flex-col h-0 min-h-screen'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <AuthRoute isAuth={user} path='/players' component={Players} />
        <AuthRoute isAuth={user} path='/dashboard' component={Dashboard} />
      </Switch>
    </div>
  );
};

export default App;
