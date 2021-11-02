import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Layout } from '../../components';
import { Add, List } from '../../containers';

const AppRouter: React.FC<{}> = (): JSX.Element => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/list" exact children={List} />
          <Route path="/add" exact children={Add} />
          <Redirect to="/list" />
        </Switch>
      </Layout>
    </Router>
  );
}

export default AppRouter;