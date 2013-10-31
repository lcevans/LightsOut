Wday.Views.PostForm = Backbone.View.extend({
  events: {
  	"submit": "submit"
  },

  template: JST['posts/postForm'],

  render: function () {
  	this.$el.html(this.template({
      post: this.model
    }));
  	return this;
  },

  submit: function (event) {
    var that = this;
    event.preventDefault();

    var params = $(event.target).serializeJSON();
    this.model.set(params['post']);

    var success = function () {Backbone.history.navigate("/posts/" + that.model.get("id"), {trigger: true})}; 
    var error = function (post, error) {
      $("div.errors").html("");
      error.responseJSON.forEach(function (error) {
        $("div.errors").prepend("Error: " + error + "<br>");
      });
    }

    if (this.model.isNew()) {
      this.collection.create(this.model,{
        success: success,
        error: error
      });
    }
    else {
      this.model.save({},{
        success: success,
        error: error
      });
    }



    
  }

});