GistClone.Views.GistShow = Backbone.View.extend({

  initialize: function() {
    var that = this;

    that.listenTo(that.model, "change", that.render.bind(that));
  },

  events: {
    "click .edit-title": "editTitle",
    "submit #title-form": "updateTitle",
    "click .edit-gist-file": "editGistFile",
    "submit .gist-file-form": "updateGistFile"
  },

  render: function() {
    var that = this;

    var renderedContent = JST["gists/show"]({
      gist: that.model
    })


    that.$el.html(renderedContent);

    return that;
  },

  editTitle: function(event) {
    var that = this;
    event.preventDefault();

    var renderedContent = JST["gist/title_form"]({ gist: that.model})

    $("span.title").html(renderedContent);
  },

  updateTitle: function(event) {
    var that = this;
    event.preventDefault();
    var formData = $(event.target).serializeJSON();


    that.model.set(formData["gist"]);
    //that.model.set("title", formData["gist"]["title"]);
    that.model.save();
  },

  editGistFile: function(event) {
    var that = this;
    event.preventDefault();

    var $li = $(event.target).parent()
    var gistFileId = parseInt($(event.target).attr("data-id"))

    var gistFile;
    _(that.model.get("gist_files")).each(function(currentGistFile) {
      if (currentGistFile.get("id") === gistFileId) {
        gistFile = currentGistFile;
      }
    });

    var renderedContent = JST["gist/file-form"]({
      file: gistFile
    })

    $li.html(renderedContent);
  },

  updateGistFile: function(event) {
    var that = this;
    event.preventDefault();

    var gistFileId = parseInt($(event.target).attr("data-id"));
    var gistFile;
    _(that.model.get("gist_files")).each(function(currentGistFile) {
      if (currentGistFile.get("id") === gistFileId) {
        gistFile = currentGistFile;
      }
    });

    var formData = $(event.target).serializeJSON();
    gistFile.set(formData["gist_file"]);

    that.model.save();
  }
})