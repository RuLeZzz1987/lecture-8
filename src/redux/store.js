import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

// const middleware = store => next => action => {};

// const thunk = ({ dispatch, getState }) => next => action =>
//   typeof action === 'function' ? action(dispatch, getState) : next(action);
//
// const loggerMiddleware = store => next => action => {
//   if (action.payload instanceof Promise) {
//     return action.then(response => next(response))
//       .catch(error => next(error));
//   }
//
//   return next(action);
// };



const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);


export default store;