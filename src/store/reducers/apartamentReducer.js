import {
  GET_APARTAMENTS,
  GET_APARTAMENTS_SUCCESS,
  SET_LIKE,
  SET_LIKE_SUCCESS
} from '../actionTypes';

const initialState = {
  isLoading: false,
  apartaments: []
}

export default (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_APARTAMENTS:
      return {
        ...state,
        isLoading: payload.isLoading
      }
    case GET_APARTAMENTS_SUCCESS:
      return {
        ...state,
        isLoading: payload.isLoading,
        apartaments: payload.apartaments
      }
    default:
      return state;
  }
}