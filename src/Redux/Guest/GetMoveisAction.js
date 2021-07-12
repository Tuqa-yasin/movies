import {
    GET_MOVIES_BY_ID_FAILED,
    GET_MOVIES_BY_ID_START,
    GET_MOVIES_BY_ID_SUCCESS,
  } from "./GetMoveisTypeConstant";
  import axios from "axios";
  
  export const GetMoveisAction = (id) => async (dispatch) => {
    // console.log(id)
    dispatch({
      type: GET_MOVIES_BY_ID_START,
    });
  
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=dcf2d1463b5703e25fc8d86eb0fce187&language=en-US` );
      dispatch({
        type: GET_MOVIES_BY_ID_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: GET_MOVIES_BY_ID_FAILED,
        payload: e?.response?.message,
      });
    }
  };