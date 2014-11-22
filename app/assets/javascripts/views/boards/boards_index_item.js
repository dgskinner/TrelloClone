TrelloClone.Views.BoardsIndexItem = Backbone.View.extend({
	tagName: "div",
	
    template: JST['boards/index_item'],
	
	// events: {},
	
	render: function() {
		var content = this.template({board: this.model});
		this.$el.html(content);
		return this;
	}
});