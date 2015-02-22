import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  actions: {
    click: function () {
      "use strict";
      Ember.Logger.debug('open-offcanvas clicked!');
    }
  }
});
