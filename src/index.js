import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const render = (Component) => {
  ReactDOM.render(
    <StrictMode>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </StrictMode>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot)
  // eslint-disable-next-line global-require
  module.hot.accept('./App', () => render(require('./App').default));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
