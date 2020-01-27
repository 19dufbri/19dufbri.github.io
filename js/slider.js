var stepcount = 30.0;

function slideToTheRight() {
	// Slide to the Right!
    body = document.getElementById("cha-cha-slide");
    body.style = "margin-left: -100vw;"
	/*var body = document.getElementById("cha-cha-slide");
	var count = 0;

	var timer = setInterval(function () {
        if (count == stepcount){
            clearInterval(timer);
            body.style.marginLeft = -100 + "vw";
        }
        newpos = -100*(count/stepcount);
        body.style.marginLeft = newpos + "vw";
        count++;
    }, 16.66);*/
}

function slideToTheLeft() {
    // Slide to the Left!
    body = document.getElementById("cha-cha-slide");
    body.style = "margin-left: 0vw;"
    /*var body = document.getElementById("cha-cha-slide");
    var count = stepcount;

    var timer = setInterval(function () {
        if (count == 0){
            clearInterval(timer);
            body.style.marginLeft = -0 + "vw";
        }
        newpos = -100*(count/stepcount);
        body.style.marginLeft = newpos + "vw";
        count--;
    }, 16.66);*/
}

function chaChaRealSmooth() {
    window.location = "https://www.youtube.com/watch?v=wZv62ShoStY";
}