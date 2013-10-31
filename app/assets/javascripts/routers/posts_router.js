Wday.Routers.Posts = Backbone.Router.extend({
	initialize: function ($rootEl) {
		this.$rootEl = $rootEl;
	},

	routes: {
		"": "index",
		"posts/new": "new",
		"posts/:id": "show",
		"posts/:id/edit": "edit"
	},

	index: function () {
		var that = this;

		var indexView = new Wday.Views.PostsIndex({
			collection: Wday.posts
		});

		$("#sidebar").html(indexView.render().$el);
	},

	show: function (id) {
		var modelToShow = Wday.posts.get(id);

		var showView = new Wday.Views.PostShow({
			model: modelToShow
		});

		$("#content").html(showView.render(this.posts).$el);
	},

	new: function () {
		var newView = new Wday.Views.PostForm({
			model: new Wday.Models.Post(),
			collection: Wday.posts
		});

		$("#content").html("<h2>New Post</h2>").append(newView.render().$el);
	},

	edit: function (id) {
		var modelToEdit = Wday.posts.get(id);

		var editView = new Wday.Views.PostForm({
			model: modelToEdit
		});


		$("#content").html("<h2>Edit Post</h2>").append(editView.render().$el);
	}
});
