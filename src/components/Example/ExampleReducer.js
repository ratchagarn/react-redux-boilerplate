/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Reducer - Example
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import handleReducerState from 'helpers/handleReducerState';

const initialState = [];

export default function(state = initialState, action) {
  return handleReducerState(state, action);
}
