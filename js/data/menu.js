var App = App || {};
App.Model = App.Model || {};

App.Model.MenuItem = Backbone.Model.extend({
	defaults : {
		label : 'Item',
		url : '#',
		active : false
	}
});

App.Model.Menu = Backbone.Collection.extend({
	model : App.Model.MenuItem,
});