window.Wday = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl) {

    Wday.posts = new Wday.Collections.Posts();
    Wday.posts.fetch({
      success: function () {
        new Wday.Routers.Posts($rootEl);
        Backbone.history.start();
      }
    });


  }
};

$(document).ready(function(){
  Wday.initialize($('body'));
});


