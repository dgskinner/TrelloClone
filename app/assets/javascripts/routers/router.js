TrelloClone.Routers.Router = Backbone.Router.extend({
	initialize: function() {
		this.$rootEl = $('#main');
		this.boards = new TrelloClone.Collections.Boards();
		debugger
		
	},
	
	routes: {
		'': 'boardsIndex',
		'boards/:id': 'boardShow'
	},
	
	boardsIndex: function () {
		this.boards.fetch();
		debugger
		var indexView = new TrelloClone.Views.BoardsIndex({collection: this.boards});
		this.$rootEl.html(indexView.render().$el);
	},
	
	// boardShow: function (id) {
	// 	var board = this.boards.find({id: id});
	// 	board.fetch();
	// 	var showView = new TrelloClone.Views.BoardsShow();
	// }
});
