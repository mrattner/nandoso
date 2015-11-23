define(["knockout", "director"],
function (ko, director) {
	/**
	 * Configuration for the application routes.
	 */
	function RouterConfig() {
		var self = this; // To avoid having to bind "this"
		self.currentRoute = ko.observable("menu");

		var routes = {
			"/":     function () { self.currentRoute("menu") },
			"/menu": function () { self.currentRoute("menu") },
			"/chat": function () { self.currentRoute("chat") }
		};
		var router = director(routes);
		router.init();
	};

	return new RouterConfig();
});