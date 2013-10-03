GistClone.Models.Gist = Backbone.Model.extend({
  urlRoot: "/gists",

  parse: function(response) {
    var that = this;

    _(response.favorites).each(function(favorite) {
      if(favorite.user_id === GistClone.currentId){
        that.set("favorite", new GistClone.Models.Favorite(favorite, {
          url: "/gists/" + response.id + "/favorite"
        }));
      }
    });

    delete response.favorites;

    return response;
  }
});