Wday.Views.PostShow = Backbone.View.extend({

	initialize: function () {
	},

	events: {
    "dblclick div#title": "editTitle",
    "dblclick div#body": "editBody"
	}, 

  template: JST['posts/show'],

  render: function () {
  	this.$el.html("");
  	this.$el.append(this.template({
  		post: this.model
  	}));

  	return this;
  },

  editTitle: function () {
    var that = this;

    $("div#title").html('<input type="text" id="form-title">');
    $("input#form-title").on("blur", function (event) {
      console.log($("input#form-title"));
      console.log(event.currentTarget);
      that.model.set({
        title: event.currentTarget.value
      });
      that.model.save();
      that.render();
    });
  },

  editBody: function () {
    
  }


});