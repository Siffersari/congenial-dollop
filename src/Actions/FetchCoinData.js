import Axios from "axios";
import { apiBaseURL } from "../Utils/Constants";
import {
  FETCH_COIN_DATA,
  FETCH_COIN_DATA_SUCCESS,
  FETCH_COIN_DATA_FAIL
} from "../Utils/ActionTypes";

export const FetchCoinData = () => {
  return dispatch => {
    dispatch({ FETCH_COIN_DATA });

    return Axios.get(`${apiBaseURL}/v1/ticker/?limit=10`)
      .then(res => {
        dispatch({ type: FETCH_COIN_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({
          type: FETCH_COIN_DATA_FAIL,
          payload: err.data
        });
      });
  };
};
