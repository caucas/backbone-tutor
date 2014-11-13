var App = App || {};
App.Model = App.Model || {};

App.Model.Motorcycle = Backbone.Model.extend({
	defaults : {
		manufacturer : '',
		model : ''
	}
});