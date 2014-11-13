var App = App || {};
App.Model = App.Model || {};

App.Model.Motorcycle = Backbone.Model.extend({
	defaults : {
		manufacturer : '',
		model : ''
	}
});

App.Model.Motorcycles = Backbone.Collection.extend({
	model : App.Model.Motorcycle
});