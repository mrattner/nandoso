define(["knockout", "director"],
function (ko, director) {
	/**
	 * Configuration for the application routes.
	 */
	function RouterConfig() {
		var self = this; // To avoid having to bind "this"
		self.currentPage = ko.observable("menuView");

		var routes = {
			"/":     function () { self.currentPage("menuView") },
			"/menu": function () { self.currentPage("menuView") },
			"/chat": function () { self.currentPage("chatView") }
		};
		var router = director(routes);
		router.init();
	};

	return new RouterConfig();
});