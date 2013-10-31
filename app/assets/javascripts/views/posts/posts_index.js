Wday.Views.PostsIndex = Backbone.View.extend({

	initialize: function () {
		var that = this;

		var renderCallback = that.render.bind(that);

		that.listenTo(that.collection, "create remove change:title", renderCallback);
	},

	events: {
		"click button.delete": "delete"
	}, 

  template: JST['posts/index'],

  render: function () {
  	this.$el.html(this.template({
  		posts: this.collection
  	}));

  	return this;
  },

  delete: function (event) {

  	var modelToDelete = this.collection.get($(event.target).attr("data-id"));
  	modelToDelete.destroy();
  }

});
