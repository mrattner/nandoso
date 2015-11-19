using System.Collections.Generic;

namespace Nandoso.Models {
	/// <summary>
	/// Represents a menu item, which could be a special.
	/// </summary>
	public class MenuItem {
		/// <summary>
		/// Auto-generated id
		/// </summary>
		public int Id {
			get; set;
		}
		/// <summary>
		/// Name of the menu item, e.g. "Chicken Salad"
		/// </summary>
		public string Name {
			get; set;
		}
		/// <summary>
		/// Ingredients, flavour text, etc.
		/// </summary>
		public string Description {
			get; set;
		}
		/// <summary>
		/// Cost in cents; will be displayed as dollars & cents
		/// </summary>
		public int Price {
			get; set;
		}
		/// <summary>
		/// Whether this menu item is currently on special
		/// </summary>
		public bool Special {
			get; set;
		}
	}
}