var sections = "Jonathan Figueroa is a web developer and visual designer working in San Diego, CA";
var sayArray = sections.split();
var loopTimer;
function frameLooper() {
	if(sayArray.length > 0) {
		document.getElementById("txt-msg").innerHTML += sayArray.shift();
	} else {
		clearTimeout(loopTimer);
                return false;
	}
	loopTimer = setTimeout('frameLooper()',90);
}
frameLooper();
