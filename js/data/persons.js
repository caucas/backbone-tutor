var App = App || {};
App.Model = App.Model || {};

App.Model.Persons = Backbone.Collection.extend({
	model : App.Model.Person
});