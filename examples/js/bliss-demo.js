window.voicecontrol = function() {
	console.log("voicecontrol");
}

window.enter = function() {
	console.log("enter");
}

// Toggle Personalization controls

window.swapBliss = function(toggle) {
	const isChecked = toggle.getAttribute('aria-checked') === 'true'
	for (const panelId of ['call-panel', 'search-panel']) {
		const panel = document.getElementById(panelId)
		const newImageRef = '#' + panelId + '-image' + (isChecked ? '' : '-bliss')
		panel.setAttribute('src', newImageRef)
		toggle.setAttribute('aria-checked', isChecked ? 'false' : 'true')
	}
}
