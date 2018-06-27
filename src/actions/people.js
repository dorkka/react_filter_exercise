import * as types from '../types/people';

export const setFilterQuery = (payload) => ({
  type: types.SET_FILTERQEUERY,
  payload: payload
});
