TrelloClone.Routers.Router = Backbone.Router.extend({
	initialize: function() {
		this.$rootEl = $('#main');
		this.boards = new TrelloClone.Collections.Boards();
		var newBoardView = new TrelloClone.Views.BoardsNew({
			collection: this.boards
		});
	},
	
	routes: {
		'': 'boardsIndex',
		'boards/:id': 'boardShow'
	},
	
	boardsIndex: function () {
		// if (!(this.boards.findWhere({title: "Create a new board..."}))) {
		// 	var newBoard = new TrelloClone.Models.Board({
		// 		title: "Create a new board..."
		// 	});
		// 	newBoard.save();
		// 	this.boards.add(newBoard);
		// }
		var that = this;
		this.boards.fetch({
			success: function () {
				if (!that.boards.findWhere({title: "Create a new board..."})) {
					var newBoard = new TrelloClone.Models.Board({
						title: "Create a new board..."
					});
					newBoard.save();
					that.boards.add(newBoard);
					debugger
				}
			}
		});
		var indexView = new TrelloClone.Views.BoardsIndex({collection: this.boards});
		this.$rootEl.html(indexView.render().$el);
	},
	
	// boardShow: function (id) {
	// 	var board = this.boards.find({id: id});
	// 	board.fetch();
	// 	var showView = new TrelloClone.Views.BoardsShow();
	// }
});
