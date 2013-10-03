GistClone.Views.GistsIndex = Backbone.View.extend({
  render: function () {
    var that = this;

    var renderedContent = JST["gists/index"]({
      gists: GistClone.Gists
    })

    that.$el.html(renderedContent);

    return that
  }
});