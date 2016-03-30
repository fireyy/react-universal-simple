import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import Layout from './views/Common/layout';
import ItemList from './views/ItemList';
import ItemDetail from './views/ItemDetail';

module.exports = (
  <Router>
    <Route path='/' component={Layout}>
      <IndexRoute component={ItemList} />
      <Route path='/item/:id' component={ItemDetail} />
    </Route>
  </Router>
);
