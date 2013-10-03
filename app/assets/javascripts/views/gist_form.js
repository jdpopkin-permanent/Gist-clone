GistClone.Views.GistForm = Backbone.View.extend({
  events: {
    "submit form.gist-form": "submit"
  },

  render: function () {
    var that = this;
    renderedContent = JST["gists/form"]();
    that.$el.html(renderedContent);

    return that;
  },


  submit: function (event) {
    event.preventDefault();

    var formData = $(event.target).serializeJSON();

    GistClone.Gists.create(formData["gist"], {wait:true})
  }
})