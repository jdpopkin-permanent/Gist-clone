window.GistClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(current_user_id) {
    //var rawGists = JSON.parse($("#gists-json").html());

    //var rawFavs = JSON.parse($("#favs-json").html());

    // initialize this.Gists
    //this.Gists = new GistClone.Collections.Gists(rawGists);

    this.Gists = new GistClone.Collections.Gists();

    this.currentId = parseInt(current_user_id);

    this.Gists.fetch({
      success: function() {
        new GistClone.Routers.GistsRouter($('#content'));
        Backbone.history.start();
      }
    })

    // new GistClone.Routers.GistsRouter($('#content'));
    // Backbone.history.start();
  }
};

$(document).ready(function(){

});
