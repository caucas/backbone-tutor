var App = App || {};
App.View = App.View || {};

App.View.Motorcycle = Backbone.View.extend({
	template : 'motorcycle.tpl',
	initialize : function() {
		this.render();
	},
	render : function() {
		var $this = this.$el;
		var data = this.collection.toJSON();
		Templates.get(this.template).then(function(template) {
			$this.html(Mustache.render(template, data));
		});
	},
	destroy : function() {
		this.$el.empty();
	}
});