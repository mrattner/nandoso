define(["knockout", "jquery", "signalr.hubs", "text!/views/chat.html"],
function (ko, $, signalR, htmlString) {
	/**
	* Constructor for chat message object.
	*/
	function ChatMessage (data) {
		this.name = data.Name;
		this.message = data.Message;
	}

	/**
	 * The Chat view model.
	 */
	function Chat () {
		var self = this;
		self.messages = ko.observableArray();
		self.displayName = ko.observable();
		// Ensure messages are updated no more than 50 times per second
		self.messages.extend({ rateLimit: 50 });
		self.msgBox = $("#message-box");
		var hub = $.connection.chatHub;

		/**
		 * Handler for starting chat.
		 */
		self.startChat = function () {
			// TODO: hide name form
			self.msgBox.focus();
		};

		/**
		 * Handler for submitting a chat message.
		 */
		self.sendMessage = function () {
			var message = self.msgBox.val();
			var name = self.displayName();
			hub.server.send(name, message);
			self.msgBox.val("");
		};

		/**
		 * Called when the hub broadcasts a message.
		 */
		hub.client.broadcastMessage = function (name, message) {
			// You can call "push" directly on the observable array
			self.messages.push(new ChatMessage({
				Name: name,
				Message: message
			}));
		};

		// Start the connection--needs to be done last
		$.connection.hub.start().done(function () {});
	};

	return {
		viewModel: Chat,
		template: htmlString
	};
});