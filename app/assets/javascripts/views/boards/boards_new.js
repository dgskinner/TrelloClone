TrelloClone.Views.BoardsNew = Backbone.View.extend({
	// tagName: "div",

	template: JST['boards/new'],

	events: {
		// 'click .dropdown-toggle': 'showForm',
		'submit form': 'createBoard'
	},

	render: function() {
		var content = this.template();
		this.$el.html(content);
		return this;
	},

	createBoard: function(event) {
		alert("CREATING BOARD...")
		// event.preventDefault();
		// var newTitle = $(event.target).find('input'.val());
		// 	var boards = new TrelloClone.Collections.Boards();
		// boards.create({title: newTitle});
		// this.render();
		// return false;
	},
	
    showForm: function() {
		debugger
      this.$el.html(this.template());
      return false;
    },


	//     // var params = $(event.currentTarget).serializeJSON();
	//     // var newTodo = new App.Models.Todo(params["todo"]);
	//     //
	//     // newTodo.save({}, {
	//     //   success: function () {
	//     //     App.Collections.todos.add(newTodo);
	//     //     Backbone.history.navigate("/", { trigger: true });
	//     //   }
	//     // });
	// }

});