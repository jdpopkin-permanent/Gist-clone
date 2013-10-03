GistClone.Views.GistsIndex = Backbone.View.extend({
  initialize: function() {
    var that = this;

    var renderCallback = that.render.bind(that);

    this.formView = new GistClone.Views.GistForm();

    this.listenTo(GistClone.Gists, "change", renderCallback);
    this.listenTo(GistClone.Gists, "add", renderCallback);
  },

  events: {
    "click .fav": "toggleFavorite",
    "click #new-gist": "renderForm"
  },

  render: function () {
    var that = this;

    var renderedContent = JST["gists/index"]({
      gists: GistClone.Gists
    })

    that.$el.html(renderedContent);

    return that
  },

  toggleFavorite: function(event) {
    var that = this;

    var gist = GistClone.Gists.get($(event.target).attr("data-id"))

    if (gist.get("favorite")) {
      gist.get("favorite").destroy();
      gist.set("favorite", null);
    } else {
      var newFav = new GistClone.Models.Favorite()
      newFav.set("user_id", GistClone.currentId);
      newFav.set("gist_id", gist.get("id"));
      newFav.url = "gists/" + gist.get("id") + "/favorite";
      newFav.save();
      gist.set("favorite", newFav);
    }
  },

  renderForm: function(event) {
    var that = this;

    event.preventDefault();

    this.$el.append(that.formView.render().$el);
  }

});