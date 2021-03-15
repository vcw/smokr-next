import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useUser } from 'reactfire';
import privateRoutes from '../../routes/privateRoutes';
import publicRoutes from '../../routes/publicRoutes';
import Loader from '../Loader';
import "./App.css";
import fallback from '../../routes/fallback';

function App() {
  const { data: user } = useUser(undefined, { initialData: 'loading' });

  return (
    <div className="App">
      { (user === 'loading')
        ? <Loader />
        : <Router>
            <Switch>
              {(user)
                ? privateRoutes
                : publicRoutes
              }
              {fallback}
            </Switch>
          </Router>
      }
    </div>
  );
}

export default App;
