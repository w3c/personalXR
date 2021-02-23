window.kbAbcLow = true;
window.kbAbcHigh = false;
window.kbNum = false;
window.kbChar = false;
var old_timestamp = null;

function toggleKb(kb){
	if(window.kbAbcLow == kb){
		var navkbSwitch = document.getElementById("navkbSwitch");
		navkbSwitch.components['gui-button'].setText('123');
		// navkbSwitch.components['gui-interactable'].setClickAction('switchKbToNum');
		switchKbToAbcLow();
	}else if(window.kbAbcHigh == kb){
		var navkbSwitch = document.getElementById("navkbSwitch");
		navkbSwitch.components['gui-button'].setText('123');
		// navkbSwitch.components['gui-interactable'].setClickAction('switchKbToNum');
		switchKbToAbcHigh();
	}else if(window.kbNum == kb){
		var navkbSwitch = document.getElementById("navkbSwitch");
		navkbSwitch.components['gui-button'].setText('Abc');
		// navkbSwitch.components['gui-interactable'].setClickAction('switchKbToAbcLow');
		switchKbToNum();
	}else if(window.kbChar == kb){
		var navkbSwitch = document.getElementById("navkbSwitch");
		navkbSwitch.components['gui-button'].setText('Abc');
		// navkbSwitch.components['gui-interactable'].setClickAction('switchKbToAbcLow');
		switchKbToChar();
	}
}

function switchKbToNum() {
	var keyboardAbcLow = document.getElementById("keyboardAbcLow");
	var keyboardAbcHigh = document.getElementById("keyboardAbcHigh");
	var keyboardNum = document.getElementById("keyboardNum");
	var keyboardChar = document.getElementById("keyboardChar");
	console.log(" - switchKbToNum");
	keyboardAbcLow.setAttribute('position','0 -10 -1');
	keyboardAbcHigh.setAttribute('position','0 -10 -1');
	keyboardChar.setAttribute('position','0 -10 -1');
	keyboardNum.setAttribute('position','0 0 0');

	keyboardAbcLow.setAttribute('visible',false);
	keyboardAbcHigh.setAttribute('visible',false);
	keyboardChar.setAttribute('visible',false);
	keyboardNum.setAttribute('visible',true);
}

function switchKbToChar() {
	var keyboardAbcLow = document.getElementById("keyboardAbcLow");
	var keyboardAbcHigh = document.getElementById("keyboardAbcHigh");
	var keyboardNum = document.getElementById("keyboardNum");
	var keyboardChar = document.getElementById("keyboardChar");
	console.log(" - switchKbToChar");
	keyboardAbcLow.setAttribute('position','0 -10 -1');
	keyboardAbcHigh.setAttribute('position','0 -10 -1');
	keyboardNum.setAttribute('position','0 -10 -1');
	keyboardChar.setAttribute('position','0 0 0');

	keyboardAbcLow.setAttribute('visible',false);
	keyboardAbcHigh.setAttribute('visible',false);
	keyboardNum.setAttribute('visible',false);
	keyboardChar.setAttribute('visible',true);
}

function switchKbToAbcHigh() {
	var keyboardAbcLow = document.getElementById("keyboardAbcLow");
	var keyboardAbcHigh = document.getElementById("keyboardAbcHigh");
	var keyboardNum = document.getElementById("keyboardNum");
	var keyboardChar = document.getElementById("keyboardChar");
	console.log(" - switchKbToAbcHigh");
	keyboardAbcLow.setAttribute('position','0 -10 -1');
	keyboardNum.setAttribute('position','0 -10 -1');
	keyboardChar.setAttribute('position','0 -10 -1');
	keyboardAbcHigh.setAttribute('position','0 0 0');

	keyboardAbcLow.setAttribute('visible',false);
	keyboardNum.setAttribute('visible',false);
	keyboardChar.setAttribute('visible',false);
	keyboardAbcHigh.setAttribute('visible',true);
}

function switchKbToAbcLow() {
	var keyboardAbcLow = document.getElementById("keyboardAbcLow");
	var keyboardAbcHigh = document.getElementById("keyboardAbcHigh");
	var keyboardNum = document.getElementById("keyboardNum");
	var keyboardChar = document.getElementById("keyboardChar");
	console.log(" - switchKbToAbcLow");
	keyboardAbcHigh.setAttribute('position','0 -10 -1');
	keyboardNum.setAttribute('position','0 -10 -1');
	keyboardChar.setAttribute('position','0 -10 -1');
	keyboardAbcLow.setAttribute('position','0 0 0');

	keyboardNum.setAttribute('visible',false);
	keyboardChar.setAttribute('visible',false);
	keyboardAbcHigh.setAttribute('visible',false);
	keyboardAbcLow.setAttribute('visible',true);
}

window.switchKb = function() {
	var keyboardAbcLow = document.getElementById("keyboardAbcLow");
	var keyboardAbcHigh = document.getElementById("keyboardAbcHigh");
	var keyboardNum = document.getElementById("keyboardNum");
	var keyboardChar = document.getElementById("keyboardChar");

	if( keyboardAbcLow.getAttribute('position').y == 0){
		window.kbAbcLow = false;
		window.kbAbcHigh = false;
		window.kbNum = true;
		window.kbChar = false;
		toggleKb(window.kbNum);
	}else{
		window.kbAbcLow = true;
		window.kbAbcHigh = false;
		window.kbNum = false;
		window.kbChar = false;
		toggleKb(window.kbAbcLow);
	}
}

window.switchKb2 = function() {
	var keyboardAbcLow = document.getElementById("keyboardAbcLow");
	var keyboardAbcHigh = document.getElementById("keyboardAbcHigh");
	var keyboardNum = document.getElementById("keyboardNum");
	var keyboardChar = document.getElementById("keyboardChar");

	if(old_timestamp == null || old_timestamp + 100 < event.timeStamp){ //prevent multiple clicks when using keyboard

		if( keyboardNum.getAttribute('position').y == 0){
			window.kbAbcLow = false;
			window.kbAbcHigh = false;
			window.kbNum = false;
			window.kbChar = true;
			toggleKb(window.kbChar);
		}else{
			window.kbAbcLow = false;
			window.kbAbcHigh = false;
			window.kbNum = true;
			window.kbChar = false;
			toggleKb(window.kbNum);
		}
		old_timestamp = event.timeStamp;
	}
}

window.addEventListener("keyup", function (event) {
	if (event.defaultPrevented) {
		return; // Do nothing if the event was already processed
	}
	switch (event.keyCode) {
		case 16: // shift
			console.log("shift key release");
			document.getElementById("shiftDown").emit('click');
			break;
		default:
			return; // Quit when this doesn't handle the key event.
	}
	event.preventDefault();
}, true);

window.keyCodeToChar = {8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause/Break",20:"Caps Lock",27:"Esc",32:"Space",33:"Page Up",34:"Page Down",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",45:"Insert",46:"Delete",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",91:"Windows",93:"Right Click",96:"Numpad 0",97:"Numpad 1",98:"Numpad 2",99:"Numpad 3",100:"Numpad 4",101:"Numpad 5",102:"Numpad 6",103:"Numpad 7",104:"Numpad 8",105:"Numpad 9",106:"Numpad *",107:"Numpad +",109:"Numpad -",110:"Numpad .",111:"Numpad /",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"Num Lock",145:"Scroll Lock",182:"My Computer",183:"My Calculator",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"};

window.keypress = function(event) {
	console.log('in window.keypress');
	if(window.old_timestamp == null || window.old_timestamp + 100 < event.timeStamp){ //prevent multiple clicks when using keyboard

		var keyCode = 222;
		var key = null;
		var text = null;

		if(event.target.parentEl.components['gui-interactable']){
			console.log('using parent el: ' + event.target.parentEl.id);
			keyCode = event.target.parentEl.components['gui-interactable']['data']['keyCode'];
			key = event.target.parentEl.components['gui-interactable']['data']['key'];
			var buttonComponent = event.target.parentEl.components['gui-button'];
			var iconButtonComponent = event.target.parentEl.components['gui-icon-button'];
			var iconLabelButtonComponent = event.target.parentEl.components['gui-icon-label-button'];
			if (buttonComponent) {
				text = buttonComponent['data']['text'];
			} else if (iconButtonComponent) {
				text = iconButtonComponent['data']['text'];
			} else if (iconLabelButtonComponent) {
				text = iconLabelButtonComponent['data']['text'];
			}
			console.log("keyCode: " + keyCode);
			console.dir(event.target.parentEl.components['gui-interactable']['data']['keyCode']);
			console.log("keypressed with button: " + keyCode);
		} else {
			console.log('using el: ' + event.target.parentEl.id);
			keyCode = event.target.components['gui-interactable']['data']['keyCode'];
			key = event.target.components['gui-interactable']['data']['key'];
			var buttonComponent = event.target.components['gui-button'];
			var iconButtonComponent = event.target.components['gui-icon-button'];
			var iconLabelButtonComponent = event.target.components['gui-icon-label-button'];
			if (buttonComponent) {
				text = buttonComponent['data']['text'];
			} else if (iconButtonComponent) {
				text = iconButtonComponent['data']['text'];
			} else if (iconLabelButtonComponent) {
				text = iconLabelButtonComponent['data']['text'];
			}
			console.log("keypressed with keyboard: " + keyCode);
		}

		//var textField = document.getElementById("htmlElement");
		//textField.textContent += window.keyCodeToChar[keyCode];
		// var char = window.keyCodeToChar[keyCode];
		if (!text) {
			text = String.fromCharCode(keyCode);
			if (keyCode >= 65 || keyCode <= 90) {
				text = text.toLowerCase();
			}
		}
		var textField = document.getElementById("test_input");
		if (key === 'Backspace') {
			textField.components['gui-input'].delete();
		} else if (text === 'space') {
			textField.components['gui-input'].appendText(' ');
		} else {
			textField.components['gui-input'].appendText(text);
		}
		window.old_timestamp = event.timeStamp;
	}
}
