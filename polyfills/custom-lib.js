var _ = (function () {
  'use-strict';

  var method = {};

  /**
   * Get an element in the DOM
   * @param  {String} selector The selector to match against
   * @param  {Node} scope      An element to search within [optional]
   * @return {Node}            The first matching element
   */
  method.getSelector = function (selector, scope) {
    if (!selector) throw new Error('Please provide a selector');

    return scope
      ? scope.querySelector(selector)
      : document.querySelector(selector);
  };

  return method;
})();

_.getSelector('div');
