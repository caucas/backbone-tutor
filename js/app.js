var App = App || {};
App.initialize = function() {
	Backbone.history.start();

	new App.View.Menu({
		model : App.Menu,
		el : $('#menu')
	});
}

App.Menu = new App.Model.Menu([{
		id : 'person',
		label : 'Person',
		url : '#person',
		active : false
	},{
		id : 'moto',
		label : 'Motorcycle',
		url : '#moto',
		active : false
	}]);

App.onRoute = function(View, options) {
	App.view && App.view.destroy();
	App.view = new View(options);
}

App.Router = new (Backbone.Router.extend({
	routes : {
		'person' : 'person',
		'moto' : 'motorcycle'
	}
}))();

App.Router.on('route:person', function() {
	var persons = new App.Model.Persons([
		{
			name : 'Jack Daniels',
			age : 81
		},{
			name : 'Johny Walker',
			age : 93
		}
	]);
	App.onRoute(App.View.Person, {
		collection : persons,
		menu : App.Menu,
		el : $('#content')
	});
});

App.Router.on('route:motorcycle', function() {
	var motorcycles = new App.Model.Motorcycles([
		{
			manufacturer : 'Honda',
			model : 'CBR600RR'
		},{
			manufacturer : 'Suzuki',
			model : 'GSX-R600'
		}
	]);
	App.onRoute(App.View.Motorcycle, {
		collection : motorcycles,
		menu : App.Menu,
		el : $('#content')
	});
});

$(App.initialize);