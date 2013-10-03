GistClone.Views.GistForm = Backbone.View.extend({
  initialize: function() {
    this.filesIndex = 0;
  },

  events: {
    "submit form.gist-form": "submit",
    "click a#add-gistfile": "addGistfile"
  },

  render: function () {
    var that = this;
    renderedContent = JST["gists/form"]({index: that.filesIndex});
    this.filesIndex++;
    that.$el.html(renderedContent);
    that.$el.append($("<a href='#' id='add-gistfile'>Add Gistfile</a>"));

    return that;
  },


  submit: function (event) {
    event.preventDefault();

    var formData = $(event.target).serializeJSON();

    GistClone.Gists.create(formData["gist"], {wait:true})
  },

  addGistfile: function(event) {
    var that = this;
    event.preventDefault();

    var renderedContent = JST["gist_files/form_part"]({index: that.filesIndex});

    $(".gist-form").append(renderedContent);

    that.filesIndex++;
  }
})