// Import the APIs we need.
var contextMenu = require("context-menu");
var panel = require("panel");

 
exports.main = function(options, callbacks) {
  console.log(options.loadReason);
 
  // Create a new context menu item.
  var menuItem = contextMenu.Item({
    label: "Calculate Readability",
    // Show this item when a selection exists.
    context: contextMenu.SelectionContext(),
    // When this item is clicked, post a message back with the selection
    contentScript: 'self.on("click", function () {' +
                   '  var text = window.getSelection().toString();' +
                   '  self.postMessage(text);' +
                   '});',
    // When we receive a message, look up the item
    onMessage: function (selText) {
      console.log('Calculating readability value for :"' + selText + '"');
      calculateReadability(selText);
    }
  });
};
 
function calculateReadability(selText) {
	var data = require("self").data;
	console.log("selText:" + selText)
	readability = panel.Panel({
    width: 500,
    height: 600,
	contentURL: data.url("readabilityView.html"),
	contentScriptFile: data.url("update-data.js"),

	onShow: function() {
		console.log(":::::: onShow()");
        this.postMessage(selText); // this message will be captured by the "self.on('message',.." code block in panel.js
    },
	onMessage: function(contentScriptMessage) {
    // Handle message from the content script
	console.log("SEL TEXT that came in: "+contentScriptMessage);
	document.getElementById("inText").innerHTML = contentScriptMessage;
  }
  });
  readability.show();
}

