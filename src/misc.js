var previousRadio = Backbone.Radio;

/** @namespace */
var Radio = Backbone.Radio = {};

/**
 * Current Version of Radio
 * @readonly
 * @constant {String} VERSION
 * @memberof Radio
 */
Radio.VERSION = '<%= version %>';

/**
 * Restores the previous Backbone.Radio
 * @method
 * @returns this
 * @memberof Radio
 */
Radio.noConflict = function () {
  Backbone.Radio = previousRadio;
  return this;
};
