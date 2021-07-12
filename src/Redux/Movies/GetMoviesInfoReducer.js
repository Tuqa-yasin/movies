
import {
  GET_MOVIES_INFO_START,
  GET_MOVIES_INFO_SUCCESS,
  GET_MOVIES_INFO_FAILED,
} from "./GetMoviesInfoTypeConstants";

export const GetMoviesInfoReducers = (
  initialState = {
    GetMoviesInfo: [],
    isLoading: false,
    error: ""
  },
  action
) => {
  switch (action.type) {
    case GET_MOVIES_INFO_START:
      return {
        ...initialState,
        isLoading: false,
      };
    case GET_MOVIES_INFO_SUCCESS:
      return {
        ...initialState,
        isLoading: true,
        GetMoviesInfo: [...initialState.GetMoviesInfo,action.payload],
      };
    case GET_MOVIES_INFO_FAILED:
      return {
        ...initialState,
        isLoading: false,
        error: action.payload,
        
      };
    default:
      return initialState;
  }
};
