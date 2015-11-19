﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;
using MySql.Data.Entity;

namespace Nandoso.Models {
	public class NandosoContext : DbContext {
		// You can add custom code to this file. Changes will not be overwritten.
		// 
		// If you want Entity Framework to drop and regenerate your database
		// automatically whenever you change your model schema, please use data migrations.
		// For more information refer to the documentation:
		// http://msdn.microsoft.com/en-us/data/jj591621.aspx

		public NandosoContext () : base("name=NandosoContext") {
			Database.SetInitializer(new MigrateDatabaseToLatestVersion<NandosoContext, Config>());
		}

		/// <summary>
		/// Configuration class for automatic migrations
		/// </summary>
		[DbConfigurationType(typeof(MySqlEFConfiguration))]
		public class Config : DbMigrationsConfiguration<NandosoContext> {
			public Config () {
				this.AutomaticMigrationsEnabled = true;
			}
		}

		public System.Data.Entity.DbSet<Nandoso.Models.MenuItem> MenuItems {
			get; set;
		}
	}
}
