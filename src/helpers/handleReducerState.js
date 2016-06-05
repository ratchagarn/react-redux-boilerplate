/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Helper - Handler reducer state
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

/**
 * Redux reducer managment for control reducer by action.
 * --------------------------------------------------------
 * @param {Any}         Redux store state.
 * @return {Object}     Redux action.
 *
 * usage:
 * function reducer(state = [], action) {
 *   return handleReducerState(state, action);
 * }
 */
export default function handleReducerState(state, action) {
  if (typeof action.updateState === 'function') {
    return action.updateState(state);
  }
  else {
    return state;
  }
}
