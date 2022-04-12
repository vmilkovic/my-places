import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import userReducer from 'store/reducers/user';
import placesReducer from 'store/reducers/places';

const rootReducer = combineReducers({
  user: userReducer,
  places: placesReducer,
});

const middlewares = applyMiddleware(ReduxThunk);

const store = createStore(rootReducer, composeWithDevTools(middlewares));

export default store;
