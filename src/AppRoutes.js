import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './containers/Home';
import Spotify from './containers/Spotify';
import Giphy from './containers/Giphy';

const AppRoutes = () => (
  <BrowserRouter>
    <Fragment>
      <Route exact to="/" component={ Home } />
      <Route exact to="/spotify" component={ Spotify } />
      <Route exact to="/giphy" component={ Giphy } />
    </Fragment>
  </BrowserRouter>
);

export default AppRoutes;
