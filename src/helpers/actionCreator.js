/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Helper - Action creator
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

/**
 * Helper for create action for reducer.
 * --------------------------------------------------------
 * @param {String}      Action type.
 * @param {Function}    Reducer state handler callback.
 * @param {Object}      Addition state for reducer
 *
 * usage 1:
 * function add(text) {
 *   return actionCreator('EXAMPLE_ADD', (state) => {
 * 	   return [ ...state, { text } ]
 *   });
 * }
 *
 * Result:
 * {
 *   type: 'EXAMPLE_ADD',
 *   updateState(state) {
 *     return [ ...state, { text } ]
 *   }
 * }
 *
 * usage 2:
 * function add(text) {
 *   return actionCreator('EXAMPLE_ADD', (state) => {
 * 	   return [ ...state, { text } ]
 *   }, { extraText: 'extraText' });
 * }
 *
 * Result:
 * {
 *   type: 'EXAMPLE_ADD',
 *   updateState(state) {
 *     return [ ...state, { text } ]
 *   },
 *   extraText: 'extraText'
 * }
 *
 */
export default function actionCreator(type, updateState, additionState = {}) {
  const defaultState = {
    type,
    updateState,
  };

  // return { ...defaultState, ...additionState };
  return Object.assign({}, defaultState, additionState);
}
