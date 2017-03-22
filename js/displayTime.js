document.addEventListener("DOMContentLoaded", startTimer)


// $.get("http://api.timezonedb.com/v2/list-time-zone?key=B4OAP70VV76J&format=json",function(data){
// 	for (i = 0; i < data.zones.length; i++) {
// 		if (data.zones[countryName] === ) 
// 	}
		
// }


function startTimer() {
	setInterval(displayTime, 1000);
	displayTime();
}

function displayTime() {
	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
   
	var time = formatHour(h) + ":" + addPrefix(m) + ":" + addPrefix(s) + " " + getPeriod(h)
    //console.log(time);
	function addPrefix(num) {
    	if (num < 10) {
    		return num = "0" + String(num);
    	}
    	else {
    		return String(num);
    	}
    }

    function formatHour(num) {
    	if (num > 12) {
    		return num = num % 12;
    	}
    	else if (num == 0) {
    		return num = 12
    	}
    	else {
    		return num;
    	}
    }

    function getPeriod(num) {
    	if (num > 11) {
    		var period = "PM";
    		return period;
    	}
    	else {
    		var period = "AM";
    		return period;
    	}
    }

    var canvas = document.getElementById("clock");
    var ctx = canvas.getContext("2d");
    var radius = 100;

    var x = canvas.width / 2;
    var y = canvas.height / 2;  

    function drawHand(shift, armLength, armColor) {
    	
        angle = (2 * Math.PI * shift) - (Math.PI / 2);
    	var pointX = x + (Math.cos(angle) * (armLength * radius))
    	var pointY = y + (Math.sin(angle) * (armLength * radius))
       
    	console.log(pointY)
    	ctx.lineWidth = 5;

    	ctx.beginPath();
    	ctx.moveTo(x, y);
    	ctx.lineTo(pointX, pointY);
    	ctx.stroke();

    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
			drawHand(h / 12, 0.50, '#000000'); // Hour
			drawHand(m / 60, 0.75, '#000000'); // Minute
			drawHand(s / 60, 1.00, 'blue'); // Second
}

document.getElementById('test').innerHTML = 'changed'