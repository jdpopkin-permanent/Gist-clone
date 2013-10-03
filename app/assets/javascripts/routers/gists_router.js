GistClone.Routers.GistsRouter = Backbone.Router.extend({
  initialize: function($rootEl, gists) {
    this.$rootEl = $rootEl;
    this.gists = gists;
  },

  routes: {
    "": "index"
  },

  index: function() {
    var that = this;

    var gistsIndex = new GistClone.Views.GistsIndex();
  }

});