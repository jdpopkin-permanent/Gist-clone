GistClone.Routers.GistsRouter = Backbone.Router.extend({
  initialize: function($rootEl) {
    this.$rootEl = $rootEl;
  },

  routes: {
    "": "index"
  },

  index: function() {
    var that = this;

    var gistsIndex = new GistClone.Views.GistsIndex();

    that.$rootEl.html(gistsIndex.render().$el);
  }
});