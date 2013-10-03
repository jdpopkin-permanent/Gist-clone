GistClone.Routers.GistsRouter = Backbone.Router.extend({
  initialize: function($rootEl) {
    this.$rootEl = $rootEl;
  },

  routes: {
    "": "index"
    //"gists/new": "new"
  },

  index: function() {
    var that = this;

    var gistsIndex = new GistClone.Views.GistsIndex();

    that.$rootEl.html(gistsIndex.render().$el);
  },

  // new: function() {
//     console.log("HEY")
//   }
});