import React from 'react';
import { Route } from "react-router-dom";
import NotFound from '../views/NotFound';

const fallback = (
  <Route
    path="/"
  >
    <NotFound />
  </Route>
);

export default fallback;
