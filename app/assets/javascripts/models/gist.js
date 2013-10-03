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

    var newGistFiles = _(response.gist_files).map(function(gist_file) {
      return new GistClone.Models.GistFile(gist_file);
    });

    response.gist_files = newGistFiles;

    delete response.favorites;

    return response;
  }
});