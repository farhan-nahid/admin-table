import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApiProvider from './contexts/ApiProvider';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ApiProvider>
      <App />
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
