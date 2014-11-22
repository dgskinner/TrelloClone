TrelloClone.Views.BoardsIndex = Backbone.View.extend({
	initialize: function () {
		this.listenTo(this.collection, 'add', this.addSubview)
		this.subviews = [];
		

		
        this.collection.each(function(board) {
            this.addSubview(board);
        }.bind(this));
		

		
		this.render();
	},
	
    template: JST['boards/index'],
	
	createBoardTemplate: JST['boards/new'],
	
    events: {
        'click .board.new': 'showForm',
		'submit form': 'createBoard',
		'click .board': 'showBoard' 
    },
	
	render: function() {
		var content = this.template({boards: this.collection});
		this.$el.html(content);
		return this;
	},
	
	addSubview: function (board) {
		var itemView = new TrelloClone.Views.BoardsIndexItem({
			model: board
		});
		this.subviews.push(itemView.render());
		this.$('.boards').append(itemView.$el);
	},
	
	showForm: function () {
	    this.$el.html(this.createBoardTemplate());
	},
	
	createBoard: function () {
		// var newBoard = new TrelloClone.Models.Board({
		// 	title:
		// })
		event.preventDefault();
		var that = this;
		var newTitle = $(event.target).find('input').val();
		// var boards = new TrelloClone.Collections.Boards();
		this.collection.create({title: newTitle}, {
			success: function (board) {
				var id = board.id;
		        Backbone.history.navigate('/boards/' + id, { trigger: true });
				that.render();
			}
		});
	},
	
	showBoard: function () {
		alert("SHOWING BOARD...");	
	}
	// addNewBoardSubview: function () {
	// 	var newBoard = new TrelloClone.Models.Board({
	// 		title: "Create a new board..."
	// 	});
	// 	var newItemView = new TrelloClone.Views.BoardsIndexItem({
	// 		model: newBoard
	// 	});
	// 	debugger
	// 	newItemView.$el.addClass("new");
	// 	this.subviews.push(newItemView.render());
	// 	this.$('.boards').append(newItemView.$el);
	// }

    // createFighter: function() {
    //     var fighter = new Fighters.Models.Fighter();
    //     var collection = this.collection;
    //     fighter.save({}, {
    //         success: function() {
    //             collection.add(fighter);
    //         }
    //     });
    // },
});
