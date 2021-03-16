import React from 'react';
import { Route } from 'react-router-dom';
import HomeIcon from '../icons/HomeIcon';
import StatsIcon from '../icons/StatsIcon';
import SettingsIcon from '../icons/SettingsIcon';
import Header from '../components/Header';
import Content from '../components/Content';
import Navbar from '../components/Navbar';
import Settings from '../views/Settings';
import Main from '../views/Main';

const privateRoutesList = [
  {
    name: 'Главная',
    path: '/',
    icon: <HomeIcon />,
    view: <Main />,
  },
  {
    name: 'Статистика',
    path: '/stats',
    icon: <StatsIcon />,
    view: <h1>TEST2</h1>,
  },
  {
    name: 'Настройки',
    path: '/settings',
    icon: <SettingsIcon />,
    view: <Settings />,
  },
];

const navigation = privateRoutesList.map(
  ({ path, icon }) => ({ path, icon })
);

const privateRoutes = privateRoutesList.map(({ name, path, view }) => (
  <Route path={path} exact={true} key={path}>
    <Header title={name} />
    <Content>{view}</Content>
    <Navbar navigation={navigation} current={path} />
  </Route>
));

export default privateRoutes;