define(["knockout", "jquery", "text!/views/menu.html"],
function (ko, $, htmlString) {
	/**
	* Constructor for MenuItem object from server data.
	*/
	function MenuItem (data) {
		this.name = data.Name;
		this.description = data.Description;
		this.price = "$" + (data.Price / 100.0).toFixed(2);
		this.isSpecial = data.Special;
	}

	/**
	 * The Menu view model.
	 */
	function Menu() {
		var self = this; // To avoid having to bind "this"
		self.menuItems = ko.observableArray([]);
		self.specials = ko.observableArray([]);
		self.loadingMsg = ko.observable("Loading today's delicious options...");
		self.isLoading = ko.observable(true);

		// Retrieve list of menu items from the server
		$.getJSON("/api/MenuItem").success(function (data) {
			var items = data.map(function (obj) {
				return new MenuItem(obj);
			});
			var specialItems = items.filter(function (item) {
				return item.isSpecial;
			});
			// Update the observable arrays so the view updates
			self.specials(specialItems);
			self.menuItems(items);
			self.loadingMsg("");
		}).error(function (err) {
			self.loadingMsg("There was an error getting menu items. Check back later.");
		}).complete(function () {
			self.isLoading(false);
		});
	};

	return {
		viewModel: Menu,
		template: htmlString
	};
});