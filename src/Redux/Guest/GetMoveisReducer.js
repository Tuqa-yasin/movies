import {
    
    GET_MOVIES_BY_ID_FAILED,
    GET_MOVIES_BY_ID_START,
    GET_MOVIES_BY_ID_SUCCESS,
   
  } from "./GetMoveisTypeConstant";
  
  export const GetMoveisReducers = (
    initialState = {
      Movie:[],
     isLoading: false,
     error:''
    },
    action
  ) => {
    switch (action.type) {
      case GET_MOVIES_BY_ID_START:
        return {
          ...initialState,
            isLoading: true,

        };
      case GET_MOVIES_BY_ID_SUCCESS:
        return {
          ...initialState,
            Movie: action.payload,
            isLoading: false,
          
        };
      case GET_MOVIES_BY_ID_FAILED:
        return {
          ...initialState,
            isLoading: false,
            error: action.payload,
        };
      default:
        return initialState;
    }
  };