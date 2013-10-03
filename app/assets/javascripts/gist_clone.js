window.GistClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var rawGists = JSON.parse($("#gists-json").html());

    // initialize this.Gists
    this.Gists = new GistClone.Collections.Gists(rawGists);
  }
};

$(document).ready(function(){

});
