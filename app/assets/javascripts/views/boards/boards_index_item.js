TrelloClone.Views.BoardsIndexItem = Backbone.View.extend({
	tagName: "li",
	
    template: JST['boards/index_item'],
	
	// events: {},
	
	render: function() {
		debugger
		var content = this.template({board: this.model});
		this.$el.html(content);
		return this;
	}
});