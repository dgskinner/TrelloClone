TrelloClone.Views.BoardsIndex = Backbone.View.extend({
	initialize: function () {
		this.listenTo(this.collection, 'add', this.addSubview)
		this.subviews = [];
        this.collection.each(function(board) {
            this.addSubview(board);
        }.bind(this));
		// this.addNewBoardSubview();
		this.render();
	},
	
    template: JST['boards/index'],
	
    events: {
        // "click .create-fighter": "createFighter"
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
	
	// addNewBoardSubview: function () {
	// 	var itemView = new TrelloClone.Views.BoardsIndexItem();
	// 	this.subviews.push(itemView.render());
	// 	this.$('.boards').append(itemView.$el);
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
