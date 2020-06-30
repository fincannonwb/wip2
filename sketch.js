'use strict';

let timeOffset = -((30*195)/100);
let totalMin = 195;
let lineHeight = 60;
let leftMargin = 60;
let topMargin = 98;
let triY = 0;
let triX = 60;
let offset = 7;
let triSize = 5;
let shapeOffset= 98;


function setup() {

	let cnv = createCanvas(1500, 1000);
	noStroke();
	cnv.position(0, 0);
	cnv.parent('sketch-div');
}

function draw() {

	clear();
	background(255);

	fill(0, 80);
	rect(leftMargin, 8 + topMargin, 1, 490);

	let sec = map(minute(), 0, totalMin, 0, 490);
	
	if(hour() == 10) {
		timeOffset = -((30*490)/195);
	}

	if (hour() == 11) {
		timeOffset = (30 * 490) / 195;
	}

	if (hour() == 12) {
		timeOffset = (90 * 490) / 195;
	}

	if (hour() == 13) {
		timeOffset = (150 * 490) / 195;
		if(minute() > 15){
			timeOffset = 0;
		}
	}

	triY = sec + timeOffset;

	rect(leftMargin - 7, offset + topMargin + 0, 15, 1);
	rect(leftMargin - 7, offset + topMargin + 113.076923076923077, 15, 1);
	rect(leftMargin - 7, offset + topMargin + 150.769230769230769, 15, 1);
	rect(leftMargin - 7, offset + topMargin + 263.846153846153846, 15, 1);
	rect(leftMargin - 7, offset + topMargin + 376.923076923076923, 15, 1);
	rect(leftMargin - 7, offset + topMargin + 490, 15, 1);



	let c = color(0);
	fill(c);
//	if (hour() >= 11 && hour()<=15){
//	rect(20, timeOffset + sec + 30 + triY, 420, 1);
//	triangle(20, timeOffset + sec + 20 + triY, 30, timeOffset + sec + 30 + triY, 20, timeOffset + sec + 40 + triY);
	
	
	//uncomment on day of
//	triangle(triX + 1, triY + 1 + shapeOffset + 2, triX + triSize + 3, triY + triSize + shapeOffset + 2, triX + 1, triY + (triSize * 2) - 1 + shapeOffset + 2);
//	
	
	
//	circle(triX, timeOffset + triY + 5 + shapeOffset, 9);
//	}
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





