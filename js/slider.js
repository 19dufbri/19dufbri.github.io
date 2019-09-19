function rightSlideClicked() {
	// Slide to the Left! Slide to the Right!
	var body = document.getElementById("cupid-shuffle");
	var count = 0;

	var timer = setInterval(function () {
        if (count == 50){
            clearInterval(timer);
            body.style.marginLeft = -100 + "vw";
        }
        newpos = -100*(count/50.0);
        body.style.marginLeft = newpos + "vw";
        count++;
    }, 16);
}