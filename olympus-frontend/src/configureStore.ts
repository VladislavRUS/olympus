import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createRootReducer, IApplicationState } from './store';

export default function configureStore(history: History, initialState: IApplicationState): Store<IApplicationState> {
  const composeEnhancers = composeWithDevTools({});
  return createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history))),
  );
}
