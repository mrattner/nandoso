using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;

namespace Nandoso.Models {
	[DbConfigurationType(typeof(MySql.Data.Entity.MySqlEFConfiguration))]
	public class NandosoContext : DbContext {
		// You can add custom code to this file. Changes will not be overwritten.
		// 
		// If you want Entity Framework to drop and regenerate your database
		// automatically whenever you change your model schema, please use data migrations.
		// For more information refer to the documentation:
		// http://msdn.microsoft.com/en-us/data/jj591621.aspx

		/// <summary>
		/// Configuration class for automatic migrations
		/// </summary>
		public class Config : DbMigrationsConfiguration<NandosoContext> {
			public Config () {
				this.AutomaticMigrationsEnabled = true;
			}

			/// <summary>
			/// Automatically called to seed the database with initial data.
			/// </summary>
			/// <param name="context">Data context</param>
			protected override void Seed (NandosoContext context) {
				var menu = new List<MenuItem> {
					new MenuItem {
						Name = "Bottled Soda",
						Description = "350ml bottled soft drink",
						Price = 350,
						Special = false
					},
					new MenuItem {
						Name = "Chicken Salad",
						Description = "Flame-grilled chicken, shredded lettuce, diced tomato and red onions, with lime juice and cilantro",
						Price = 1100,
						Special = false
					},
					new MenuItem {
						Name = "1/4 Chicken",
						Description = "Small portion of flame-grilled chicken",
						Price = 890,
						Special = true
					},
					new MenuItem {
						Name = "Salted Chips (Regular)",
						Description = "Classic potato wedges with salt and spices",
						Price = 450,
						Special = false
					},
					new MenuItem {
						Name = "Burger Combo Meal",
						Description = "Grilled chicken breast sandwich, chips, and a drink",
						Price = 1050,
						Special = true
					}
				};
				// Assuming none of these seed items have duplicate names
				menu.ForEach(item => context.MenuItems.AddOrUpdate(i => i.Name, item));
				context.SaveChanges();
			}
		}

		public NandosoContext () : base("name=NandosoContext") {
			Database.SetInitializer(new MigrateDatabaseToLatestVersion<NandosoContext, Config>());
		}

		public System.Data.Entity.DbSet<Nandoso.Models.MenuItem> MenuItems {
			get; set;
		}
	}
}
