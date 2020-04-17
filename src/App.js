import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Main from './router/index';
import './style/index.less';

function App() {
  return <div id="app">
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </div>;
}