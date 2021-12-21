import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Layout } from '../../components';
import { Add, List } from '../../containers';

const AppRouter: React.FC<{}> = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/list" element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/*" element={<Navigate to="/list" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default AppRouter;