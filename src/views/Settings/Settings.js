import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../api/firebase';
import { LoadingContext } from '../../providers/LoadingProvider';
import Button from '../../components/Button';
import './Settings.css';

function Settings() {
  const history = useHistory();
  const { setLoading } = useContext(LoadingContext);

  function logout() {
    setLoading(true);
    auth.signOut();
    history.push('/');
    setLoading(false);
  }

  return (
    <Button text="Выйти" onClick={logout} className="settings__button" />
  );
};

export default Settings;
