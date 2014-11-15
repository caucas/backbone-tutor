var App = App || {};
App.View = App.View || {};

App.View.BaseView = Backbone.View.extend({
	initialize : function(options) {
		this.template = options.template || this.template;
		this.render();
	},
	render : function() {
		var self = this;
		var $this = this.$el;
		var data = this.collection.toJSON();
		Templates.get(this.template).then(function(template) {
			$this.html(Mustache.render(template, data));
			self.menu.set('active', true);
		});
	},
	destroy : function() {
		this.menu.set('active', false);
		this.$el.empty();
	}
});