define(["jquery", "signalr.hubs", "text!/views/chat.html"],
function ($, signalR, htmlString) {
	/**
	 * The Chat view model.
	 */
	function Chat () {
		// Declare a proxy to reference the hub. 
		var chat = $.connection.chatHub;
		// Create a function that the hub can call to broadcast messages.
		chat.client.broadcastMessage = function (name, message) {
			// Html encode display name and message. 
			var encodedName = $('<div />').text(name).html();
			var encodedMsg = $('<div />').text(message).html();
			// Add the message to the page. 
			$('#messages').append('<li><strong>' + encodedName
				+ '</strong>:&nbsp;&nbsp;' + encodedMsg + '</li>');
		};
		// Get the user name and store it to prepend to messages.
		$('#display-name').val(prompt('Enter your name:', ''));
		// Set initial focus to message input box.  
		$('#message').focus();
		// Start the connection.
		$.connection.hub.start().done(function () {
			$('#send').click(function () {
				// Call the Send method on the hub. 
				chat.server.send($('#display-name').val(), $('#message').val());
				// Clear text box and reset focus for next comment. 
				$('#message').val('').focus();
			});
		});
	};

	return {
		viewModel: Chat,
		template: htmlString
	};
});