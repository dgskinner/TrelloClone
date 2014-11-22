window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
	  new TrelloClone.Routers.Router();
	  Backbone.history.start();
  }
};

// Some seeding stuff

// coll = new TrelloClone.Collections.Boards();
// b1 = new TrelloClone.Models.Board({title: "This is the first example title"});
// b2 = new TrelloClone.Models.Board({title: "This is another possible title"});
// b3 = new TrelloClone.Models.Board({title: "This is the third board's title"});
// b4 = new TrelloClone.Models.Board({title: "This is the title of the fourth board"});
// b5 = new TrelloClone.Models.Board({title: "This is yet another title"});
// b1.save();
// b2.save();
// b3.save();
// b4.save();
// b5.save();
// coll.add(b1);
// coll.add(b2);
// coll.add(b3);
// coll.add(b4);
// coll.add(b5);
// coll.fetch();

