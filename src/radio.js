/*
 * Backbone.Radio
 * --------------
 * The 'top-level' API for working with Backbone.Radio
 *
 */

/**
 * @file The 'top-level' API for working with Backbone.Radio
 */

_.extend(Radio, {

  /**
   * @private
   * @type {Object}
   * @memberof Radio.Channel
   */
  _channels: {},

  /**
   * Setting this to `true` will cause console warnings to be issued whenever
   * you interact with a `request` or `command` that isn't registered.
   * @member {Boolean} DEBUG
   * @memberof Radio
   */
  DEBUG: false,

  /**
   * @method
   * @protected
   * @ignore
   * @param {String} warning
   * @param {String} eventName
   * @param {String} channelName
   * @memberof Radio
   */
  _debugLog: function(warning, eventName, channelName) {
    if (this.DEBUG) {
      var channelText = channelName ? ' on the ' + channelName + ' channel' : '';
      console.warn(warning + channelText + ': "' + eventName + '"');
    }
  },

  /**
   * Get a reference to a channel by name. If a name is not provided an Error
   * will be thrown.
   * @method
   * @param {String}  channelName
   * @returns {Channel}
   * @throws {Error} You must provide a name for the channel.
   * @memberof Radio
   */
  channel: function(channelName) {
    if (!channelName) {
      throw new Error('You must provide a name for the channel.');
    }
    return Radio._channels[channelName] || new Radio.Channel(channelName);
  }
});
