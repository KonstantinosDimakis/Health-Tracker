/*global HealthTracker, Backbone, JST*/

HealthTracker.Views = HealthTracker.Views || {};

(function () {
  'use strict';

  HealthTracker.Views.FoodView = Backbone.View.extend({

    el: '.card:last',

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
      this.$el.append(this.template());
    }

  });

})();
