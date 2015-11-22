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
	function Menu () {
		this.menuItems = ko.observableArray([]);
		this.specials = ko.observableArray([]);

		// Retrieve list of menu items from the server
		$.getJSON("/api/MenuItem", function (data) {
			var items = data.map(function (obj) {
				return new MenuItem(obj);
			});
			var specialItems = items.filter(function (item) {
				return item.isSpecial;
			});
			// Update the observable arrays so the view updates
			this.specials(specialItems);
			this.menuItems(items);
		}.bind(this));
	};

	return {
		viewModel: Menu,
		template: htmlString
	};
});