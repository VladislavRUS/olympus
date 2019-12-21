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
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

toast.configure({
  hideProgressBar: true,
  draggable: false,
  closeOnClick: false,
  closeButton: false,
});

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
