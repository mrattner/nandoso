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
 * Controls the Menu view.
 */
function MenuViewModel () {
	this.menuItems = ko.observableArray([]);

	// Retrieve list of menu items from the server
	$.getJSON("/api/MenuItem", function (data) {
		var items = data.map(function (obj) {
			return new MenuItem(obj);
		});
		// Update the observable array so the view updates
		this.menuItems(items);
	}.bind(this));
}

ko.applyBindings(new MenuViewModel());