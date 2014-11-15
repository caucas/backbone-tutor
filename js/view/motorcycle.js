var App = App || {};
App.View = App.View || {};

App.View.Motorcycle = App.View.BaseView.extend({
	template : 'motorcycle.tpl',
	initialize : function(options) {
		this.menu = options.menu.get('moto');
		App.View.BaseView.prototype.initialize.call(this, options);
	}
});