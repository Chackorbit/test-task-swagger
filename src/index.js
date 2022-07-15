import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/test-task-swagger/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
