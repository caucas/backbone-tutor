var App = App || {};
App.View = App.View || {};

App.View.Person = App.View.BaseView.extend({
	template : 'person.tpl',
	initialize : function(options) {
		this.menu = options.menu.get('person');
		App.View.BaseView.prototype.initialize.call(this, options);
	}
});