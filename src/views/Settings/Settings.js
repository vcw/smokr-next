import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from 'reactfire';
import Button from '../../components/Button';
import './Settings.css';

function Settings() {
  const history = useHistory();
  const auth = useAuth();

  function logout() {
    auth.signOut();
    history.push('/')
  }

  return (
    <Button text="Выйти" onClick={logout} className="settings__button" />
  );
};

export default Settings;
