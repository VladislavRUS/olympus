import 'normalize.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import App from './views/App/App';
import configureStore from './configureStore';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import './translations';

const history = createBrowserHistory();

// @ts-ignore
const initialState = window.initialReduxState;

const store = configureStore(history, initialState);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
