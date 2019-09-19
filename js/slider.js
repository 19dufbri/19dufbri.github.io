var stepcount = 30.0;

function rightSlideClicked() {
	// Slide to the Left! Slide to the Right!
	var body = document.getElementById("cupid-shuffle");
	var count = 0;

	var timer = setInterval(function () {
        if (count == stepcount){
            clearInterval(timer);
            body.style.marginLeft = -100 + "vw";
        }
        newpos = -100*(count/stepcount);
        body.style.marginLeft = newpos + "vw";
        count++;
    }, 16.66);
}

function leftSlideClicked() {
    // Slide to the Left! Slide to the Right!
    var body = document.getElementById("cupid-shuffle");
    var count = stepcount;

    var timer = setInterval(function () {
        if (count == 0){
            clearInterval(timer);
            body.style.marginLeft = -0 + "vw";
        }
        newpos = -100*(count/stepcount);
        body.style.marginLeft = newpos + "vw";
        count--;
    }, 16.66);
}