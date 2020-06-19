var current = 1;
var paused = true;


function slide_update() {
	var images = document.getElementsByClassName('slideimg');
	if (paused) {

	}
	else
	{
	for (var i = 0; i < images.length; i++) {
		images[i].style.display = 'none';
		images[i].classList.remove = 'showing';

	}
	images[current].style.display = "list-item";
	images[current].classList.toggle = 'showing';
	current++;
	if (current >= images.length) {current = 0};
	
	}
	setTimeout(slide_update, 4000);
}

function switch_pause(){
	paused = !paused;
	document.getElementById('button').classList.toggle('pressed');
	if (document.getElementById('button').innerHTML == "Play Slides") {
		document.getElementById('button').innerHTML = "Stop Slides"
	}else{		document.getElementById('button').innerHTML = "Play Slides"
}

}

function full(th) {
	ab = document.getElementsByTagName("ul")[0]
	console.log(ab)
	ab.classList.toggle("full");
	if (paused) {

	}
	else {
		switch_pause()
	}
}