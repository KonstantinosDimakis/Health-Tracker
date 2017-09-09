/*global HealthTracker, Backbone, JST*/

HealthTracker.Views = HealthTracker.Views || {};

(function () {
  'use strict';

  HealthTracker.Views.FoodView = Backbone.View.extend({

    el: '.card:first .foods',

    template: JST['app/scripts/templates/food-view.ejs'],

    tagName: 'div',

    id: '',

    className: '',

    events: {},

    initialize: function () {
      // this.listenTo(this.model, 'change', this.render);
      this.render();
    },

    render: function () {
      // Prepending is wrong. Sorting logic
      // should come from the collection.
      // The view only takes data and presents
      // it to the user. Nothing more.
      // TODO: Check if this correct, but probably it needs fix. Fix to appending
      this.$el.prepend(this.template());
    }

  });

})();
