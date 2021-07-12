import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { GetMoviesInfoReducers  } from "./Movies/GetMoviesInfoReducer";
import { GetMoveisReducers } from "./Guest/GetMoveisReducer";

const reducers = combineReducers({
    MoviesInfoState: GetMoviesInfoReducers ,
    MovieState: GetMoveisReducers ,
  });

  const middlewares = [thunk];

  const store = createStore(
    reducers,
    applyMiddleware(...middlewares)
  );
  
  export default store;
