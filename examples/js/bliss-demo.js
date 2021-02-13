window.voicecontrol = function() {
	console.log("voicecontrol");
}

window.enter = function() {
	console.log("enter");
}

// Toggle Personalization controls

window.swapBliss = function() {
	const callPanel = document.getElementById('call-panel')
	callPanel.setAttribute('src', '#ui2bliss')

	const searchPanel = document.getElementById('search-panel')
	searchPanel.setAttribute('src', '#ui1bliss')
}
