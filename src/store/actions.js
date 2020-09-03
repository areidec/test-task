import {
  GET_APARTAMENTS,
  GET_APARTAMENTS_SUCCESS,
  SET_LIKE,
  SET_LIKE_SUCCESS
} from './actionTypes';
import api from '../api';

export const getApartaments = () => async (dispatch) => {
  dispatch({
    type: GET_APARTAMENTS,
    payload: {
      isLoading: true
    }
  });

  const apartaments = await api.getApartaments();
  
  // simulated delay from backend
  setTimeout(() => {
    dispatch({
      type: GET_APARTAMENTS_SUCCESS,
      payload: {
        isLoading: false,
        apartaments
      }
    });
  }, 1000);
}