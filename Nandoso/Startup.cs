using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(Nandoso.Startup))]
namespace Nandoso {
	public class Startup {
		public void Configuration (IAppBuilder app) {
			// For more information on how to configure your application, visithttp://go.microsoft.com/fwlink/?LinkID=316888
			app.MapSignalR();
		}
	}
}
