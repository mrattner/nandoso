require.config({
	baseUrl: "/scripts",
	// Fallback to local copies if CDN links aren't available
	paths: {
		"jquery": [
			"//code.jquery.com/jquery-2.1.4.min",
			"jquery-2.1.4"
		],
		"knockout": [
			"//cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min",
			"knockout-3.4.0.debug"
		]
	}
});

// Wait for the DOM to load before executing the startup function
require(["knockout", "domReady!"], function (ko) {
	ko.components.register("menuView", { require: "./MenuViewModel" });
	ko.applyBindings();
});