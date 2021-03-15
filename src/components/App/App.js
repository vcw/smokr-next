import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';
import { LoadingContext } from '../../providers/LoadingProvider';
import privateRoutes from '../../routes/privateRoutes';
import publicRoutes from '../../routes/publicRoutes';
import fallback from '../../routes/fallback';
import Loader from '../Loader';
import "./App.css";

function App() {
  const user = useContext(UserContext);
  const { loading } = useContext(LoadingContext);

  return (
    <div className="App">
      { (loading)
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
