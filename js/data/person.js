var App = App || {};
App.Model = App.Model || {};

App.Model.Person = Backbone.Model.extend({
	defaults : {
		name : '',
		age : 0
	}
});

App.Model.Persons = Backbone.Collection.extend({
	model : App.Model.Person
});