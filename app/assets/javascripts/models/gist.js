GistClone.Models.Gist = Backbone.Model.extend({
  urlRoot: "/gists",

  parse: function(response) {
    var that = this;

    _(response.favorites).each(function(favorite) {
      if(favorite.user_id === response.user_id){
        that.set("favorite", new GistClone.Models.Favorite(favorite));
      }
    });

    delete response.favorites;

    return response;
  }
});