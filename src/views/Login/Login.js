import React from 'react';
import { useAuth } from 'reactfire';
import { Link, useHistory } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';
import 'firebase/auth'
import './Login.css';

function Login({ action }) {
  const auth = useAuth();
  const history = useHistory();

  async function login(email, password) {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push('/');
    } catch (error) {
      alert(error)
    }
  };

  async function register(email, password) {
    try {
      auth.createUserWithEmailAndPassword(email, password);
      history.push('/');
    } catch (error) {
      alert(error)
    }
  };

  return (
    <React.Fragment>
      <LoginForm action={action} onSubmit={(action === 'login') ? login : register}/>
      
      {(action === 'login')
        ? <React.Fragment>
            <p className="login__action-prompt">Впервые здесь?</p>
            <Link to="/register" className="login__action-link">Регистрация</Link>
          </React.Fragment>
        : <React.Fragment>
            <p className="login__action-prompt">Уже зарегистрированы?</p>
            <Link to="/login" className="login__action-link">Вход</Link>
          </React.Fragment>
      }

    </React.Fragment>
  );
}

export default Login;