var App = App || {};
App.Model = App.Model || {};

App.Model.Menu = Backbone.Model.extend({
	defaults : {
		items : [
			{
				label : 'Person',
				url : '#person'
			},{
				label : 'Motorcycles',
				url : '#moto'
			}
		]
	}
})