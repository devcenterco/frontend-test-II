import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './containers/Home';
import Spotify from './containers/Spotify';
import Giphy from './containers/Giphy';

const AppRoutes = () => (
  <BrowserRouter>
    <Fragment>
      <Route exact path="/" component={ Home } />
      <Route exact path="/spotify" component={ Spotify } />
      <Route exact path="/giphy" component={ Giphy } />
    </Fragment>
  </BrowserRouter>
);

export default AppRoutes;
