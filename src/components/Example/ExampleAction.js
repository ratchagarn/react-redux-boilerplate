/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Constant - Action
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { EXAMPLE_ADD, EXAMPLE_REMOVE } from './ExampleConstant';
import actionCreator from 'helpers/actionCreator';

/**
 * Add example list.
 * --------------------------------------------------------
 * @param {String}    Example list content.
 * @return {Object}   New list state after add.
 */
export function add(text) {
  return actionCreator(EXAMPLE_ADD, (state) => {
    return [
      ...state,
      {
        id: new Date().getTime(),
        text,
      },
    ];
  })
}

/**
 * Delete example list.
 * --------------------------------------------------------
 * @param {Number}    Example list id.
 * @return {Object}   New list state after delete.
 */
export function remove(id) {
  return actionCreator(EXAMPLE_REMOVE, (state) => {
    return state.filter((item) => item.id !== id);
  });
}
