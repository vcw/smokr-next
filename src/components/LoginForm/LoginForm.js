import React, { useState, useEffect } from 'react';
import Input from '../Input';
import Button from '../Button'
import { cn } from '../../utils/bem';
import './LoginForm.css';

function LoginForm({ onSubmit, action }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');

  useEffect(() => {
    if (action === 'register') {
      
    }
  });

  const b = cn('login-form');

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(email, password)
  }

  return (
    <form className={b()} onSubmit={handleSubmit}>
      <Input
        className={b('input')}
        placeholder="E-mail"
        value={email}
        onChange={({target}) => setEmail(target.value)}
      />
      <Input
        className={b('input')}
        placeholder="Пароль"
        type="password"
        value={password}
        onChange={({target}) => setPassword(target.value)}
      />
      {action === 'register' &&
        <Input
          className={b('input')}
          placeholder="Повторите пароль"
          type="password"
          value={confirmation}
          onChange={({target}) => setConfirmation(target.value)}
        />
      }
      <Button
        className={b('submit-button')}
        text={(action === 'register') ? 'Зарегистрироваться' : 'Войти'}
        type="submit"
      />
    </form>
  );
}

export default LoginForm;