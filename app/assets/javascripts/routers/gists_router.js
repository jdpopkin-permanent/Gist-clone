GistClone.Routers.GistsRouter = Backbone.Router.extend({
  initialize: function($rootEl) {
    this.$rootEl = $rootEl;
  },

  routes: {
    "": "index",
    "gists/:id": "show"
  },

  index: function() {
    var that = this;

    var gistsIndex = new GistClone.Views.GistsIndex();

    that.$rootEl.html(gistsIndex.render().$el);
  },

  show: function(id) {
    var that = this;

    var gist = GistClone.Gists.get(id);
    var showView = new GistClone.Views.GistShow({model: gist});

    that.$rootEl.html(showView.render().$el);
  }
});