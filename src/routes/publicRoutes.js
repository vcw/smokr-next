import React from 'react';
import { Route } from 'react-router-dom';
import Landing from '../views/Landing';
import Login from '../views/Login';
import Header from '../components/Header';
import Content from '../components/Content';

const publicRoutesList = [
  {
    path: '/',
    view: <Landing />
  },
  {
    path: '/login',
    name: 'Вход',
    view: <Login action="login" />
  },
  {
    path: '/register',
    name: 'Регистрация',
    view: <Login action="register" />
  },
];

const publicRoutes = publicRoutesList.map(({ name, path, view }) => (
  <Route path={path} exact={true} key={path}>
    {name ? (
      <React.Fragment>
        <Header title={name} />
        <Content>{view}</Content>
      </React.Fragment>
    ) : (
      view
    )}
  </Route>
));

export default publicRoutes;