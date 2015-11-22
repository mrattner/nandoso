using System;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace Nandoso.Hubs {
	/// <summary>
	/// SignalR hub class for broadcasting chat messages to clients.
	/// </summary>
	public class ChatHub : Hub {
		public void Send (string name, string message) {
			Clients.All.broadcastMessage(name, message);
		}
	}
}