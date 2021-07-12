
import {
  GET_MOVIES_INFO_START,
  GET_MOVIES_INFO_SUCCESS,
  GET_MOVIES_INFO_FAILED,
} from "./GetMoviesInfoTypeConstants";
import axios from "axios";


export const GetMoviesInfoAction = (pageNum ) => {
  return async (dispatch,getState) => {
    dispatch({
      type: GET_MOVIES_INFO_START,
    })

      try{
          const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=dcf2d1463b5703e25fc8d86eb0fce187&page=${pageNum}`)
        { /* let oldData=getState().GetMoviesInfo.data;
          let NewData=response.data.results;
          dispatch({
            type: GET_MOVIES_INFO_SUCCESS,
          payload: [...oldData,...NewData],*/}
          dispatch({
            type: GET_MOVIES_INFO_SUCCESS,
          payload: response.data.results
          });
      }catch (e) {
        dispatch({
          type: GET_MOVIES_INFO_FAILED,
          payload: e?.response?.message,
        });
      }
  }
}
