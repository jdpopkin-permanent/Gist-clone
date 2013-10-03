window.GistClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    //var rawGists = JSON.parse($("#gists-json").html());

    //var rawFavs = JSON.parse($("#favs-json").html());

    // initialize this.Gists
    //this.Gists = new GistClone.Collections.Gists(rawGists);

    this.Gists = new GistClone.Collections.Gists();

    this.Gists.fetch({
      success: function() {
        console.log(GistClone.Gists)
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
