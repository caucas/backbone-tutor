var App = App || {};
App.Model = App.Model || {};

App.Model.Person = Backbone.Model.extend({
	defaults : {
		name : '',
		age : 0
	}
});