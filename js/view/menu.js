var App = App || {};
App.View = App.View || {};

App.View.Menu = Backbone.View.extend({
	template : 'menu.tpl',
	initialize : function() {
		this.render();
	},
	render : function() {
		var $this = this.$el;
		var data = this.model.toJSON();
		Templates.get(this.template).then(function(template) {
			$this.html(Mustache.render(template, data));
		});
	},
	destroy : function() {

	}
});