import * as types from '../types/people';

export const setFilterQuery = (payload) => ({
  type: types.SET_FILTERQUERY,
  payload: payload
});
