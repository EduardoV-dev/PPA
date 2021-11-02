import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './routers'
import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);