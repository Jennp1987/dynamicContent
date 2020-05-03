/*eslint-env browser*/
function yHandler() {
	"use strict";
	
	//AMOUNT OF SCROLLABLE HEIGHT
	//var scrollable = document.documentElement.scrollHeight - window.innerHeight;
	//HOW MUCH THE USER HAS SCROLLED DOWN
//	var scrolled = window.scrollY;
//	if (Math.ceil(scrolled) === scrollable) {
//		window.alert("You hav reached the bottom!");
//		var wrap = document.getElementById('jumbotron');
//		var newDiv = document.createElement('div');
//			newDiv.setAttribute('class', 'newData');
//			wrap.appendChild(newDiv);
		
//		//AJAX CALL TO GET MORE DYNAMIC DATA GOES HERE
	//}
	
		var wrap = document.getElementById('jumbotron');
		
		//GET PG CONTENT HEIGHT OF EVERYTHING WITHIN DIV
		var contentHeight = wrap.offsetHeight,
		//GET VERTICAL SCROLL POSITION - GTS WHERE USER IS IN THE Y POSITION
		yOffset = window.pageYOffset,
		//TARGETING THE BOTTOM OF THE PAGE
		y = yOffset + window.innerHeight;
	
	//IF USER HAS GONE TO THE BOTTOM OR OVER
	if (y >= contentHeight) {
		//PRELOAD SCRIPT AND CALL NEXT FUNCTION
		wrap.innerHTML += '<div class="newData"></div>';
		//AJAX CALL TO GET MORE DYNAMIC DATA GOES HERE
	}
//	var status = document.getElementById('status');
//	status.innerHTML = contentHeight + " | " + y;

}
window.onscroll = yHandler;
