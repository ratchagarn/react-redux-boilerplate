/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * https://github.com/mjackson/expect
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Frequent use
 * --------------------------------------------------------
 * toBe
 * toNotBe
 * toEqual
 * toNotEqual
 * toNotExist (aliases: toBeFalsy)
 */

import expect from 'expect';
import * as helpers from 'helpers';

describe('Formatted function', () => {

  it('Capitalize - should be work properly', () => {

    expect(
      helpers.formatter('hello').capitalize()
    ).toBe('Hello');

    expect(
      helpers.formatter('the world').capitalize()
    ).toBe('The World');

    expect(
      helpers.formatter('How Do you do').capitalize()
    ).toBe('How Do You Do');

  });

});
