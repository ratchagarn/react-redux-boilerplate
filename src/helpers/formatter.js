/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Helper - Fomatter
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

/**
 * formatter helper for help your life be easy.
 * --------------------------------------------------------
 * @param {Any}         The thing you need to formatted.
 * @return {Function}   Formatted helper.
 *
 * usage:
 * formatter(theThingYouNeedToFormatted).formattedMethod(args);
 */
export default function formatter(_input_) {

  // available method
  return {
    capitalize,
  };

  /**
   * Capitalize the first letter of string.
   * --------------------------------------------------------
   * @return {String}   String than to be capitalize.
   *
   * usage:
   * formatter('the world').capitalize();
   *
   * result:
   * 'The World'
   */
  function capitalize() {
    return _input_.replace(/(^|\s)[a-z]/g, (s) => s.toUpperCase());
  }

}
