import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NoMatch from './components/NoMatch';
import Boards from './components/Boards';

export default (
  <Route>
    <Route path="/" component={App} />
    	<IndexRoute component={Boards} />
  
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)

