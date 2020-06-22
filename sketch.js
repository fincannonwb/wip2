'use strict';

let timeOffset = 0;
let totalMin = 195;
let lineHeight = 50;
let leftMargin = 50;
let topMargin = 113;
let triY = 90;
let offset = 7;




function setup() {

	let cnv = createCanvas(500, windowHeight);
	noStroke();
	cnv.position(10, 117);
	
	
	
}

function draw() {

	clear();

	fill(0,80);
	rect(100, 120, 1, 490);
	//	triangle(95, 120, 105, 120, 100,  125);
	//	rect(91, 610, 19, 2);

	let sec = map(minute(), 0, totalMin, 0, 490);
	
	if(hour() == 11) {
		timeOffset = 0;
	}

	if (hour() == 12) {
		timeOffset = (60 * 490) / 195;
	}

	if (hour() == 13) {
		timeOffset = (120 * 490) / 195;
	}

	if (hour() == 14) {
		timeOffset = (180 * 490) / 195;
		if(minute() > 15){
			timeOffset = 0;
		}
	}



	rect(93, offset + topMargin + 0, 15, 1);
	rect(93, offset + topMargin + 113.076923076923077, 15, 1);
	rect(93, offset + topMargin + 150.769230769230769, 15, 1);
	rect(93, offset + topMargin + 263.846153846153846, 15, 1);
	rect(93, offset + topMargin + 376.923076923076923, 15, 1);
	rect(93, offset + topMargin + 490, 15, 1);



	let c = color(0, 255, 0);
	fill(c);
	if (hour() >= 11 && hour()<=15){
	rect(20, timeOffset + sec + 30 + triY, 420, 1);
	triangle(20, timeOffset + sec + 20 + triY, 30, timeOffset + sec + 30 + triY, 20, timeOffset + sec + 40 + triY);
	}
}




function toggleArtistsTitle() 
{
 
	let artistsTitle = document.getElementById("artistsTitle");
	let livestreamTitle = document.getElementById("livestreamTitle");
	let artists = document.getElementById("artists");
	let livestream = document.getElementById("livestream");
	
	artistsTitle.classList.add("tabOn");
	artistsTitle.classList.remove("tabOff");
	livestreamTitle.classList.add("tabOff");
	livestreamTitle.classList.remove("tabOn");
	artists.classList.add("show");
	artists.classList.remove("hide");
	livestream.classList.add("hide");
	livestream.classList.remove("show");
	
}
  
function toggleLiveStreamTitle()
{
	let artistsTitle = document.getElementById("artistsTitle");
	let livestreamTitle = document.getElementById("livestreamTitle");
	let artists = document.getElementById("artists");
	let livestream = document.getElementById("livestream");
	
	livestreamTitle.classList.add("tabOn");
	livestreamTitle.classList.remove("tabOff");
	artistsTitle.classList.add("tabOff");
	artistsTitle.classList.remove("tabOn");
	artists.classList.add("hide");
	artists.classList.remove("show");
	livestream.classList.add("show");
	livestream.classList.remove("hide");
}





