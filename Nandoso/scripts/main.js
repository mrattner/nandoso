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
		],
		// SignalR config from http://stackoverflow.com/a/17605154
		"signalr.core": "jquery.signalR-2.2.0.min",
		"signalr.hubs": "/signalr/hubs?" // need query string for it to work
	},
	shim: {
		"jquery": {
			exports: "$"
		},
		"signalr.core": {
			deps: ["jquery"],
			exports: "$.connection"
		},
		"signalr.hubs": {
			deps: ["signalr.core"]
		}
	}
});

// Wait for the DOM to load before executing the startup function
require(["knockout", "domReady!"], function (ko) {
	ko.components.register("menuView", { require: "./MenuViewModel" });
	ko.components.register("chatView", { require: "./ChatViewModel" });
	ko.applyBindings();
});