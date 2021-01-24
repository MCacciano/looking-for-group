import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase';

import useGlobalContext from './hooks/useGlobalContext';

// components
import Navbar from './components/Navbar/Navbar';

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Villagers from './pages/Villagers';

const App = () => {
  const { setUser } = useGlobalContext();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) setUser(user);

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
        <Route path='/villagers' component={Villagers} />
      </Switch>
    </div>
  );
};

export default App;
