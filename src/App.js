import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase';

import useXivApi from './hooks/useXivApi';
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
  const { setUser, setServers } = useGlobalContext();
  const { xivapi } = useXivApi();

  useEffect(() => {
    const getServerList = async () => {
      try {
        const data = await xivapi.data.servers();
        // for some reason there are a few doubles in the list so remove them
        const uniqueServers = [...new Set(data)];
        // sort servers alphabetically
        const sortedServers = uniqueServers.sort((acc, cur) =>
          acc.localeCompare(cur)
        );
        setServers(sortedServers);
      } catch (err) {
        console.error(err);
      }
    };

    getServerList();

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
