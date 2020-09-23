import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SimpleLocalize from "./SimpleLocalize";


ReactDOM.render(
  <React.StrictMode>
    <SimpleLocalize>
      <App/>
    </SimpleLocalize>
  </React.StrictMode>,
  document.getElementById('root')
);

