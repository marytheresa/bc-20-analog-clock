document.addEventListener("DOMContentLoaded", startTimer(timezone));

function startTimer(timezone) {
	console.log(">>>>>>>>>got here", timezone);
	//e = document.getElementsByClassName("timeZones");
	setInterval(checkTimezone, 1000);
	checkTimezone(timezone);
};


/*function returnOffset(timeZone) {
	switch(timeZone){
        case "UTC-12.00": var value = -13; return value;
        case "UTC-11.00": var value = -12; return value;
        case "UTC-10.00": var value = -11; return value;
        case "UTC-09.00": var value = -10; return value;
        case "UTC-08.00": var value = -9; return value;
        case "UTC-07.00": var value = -8; return value;
        case "UTC-06.00": var value = -7; return value;
        case "UTC-05.00": var value = -6; return value;
        case "UTC-04.00": var value = -5; return value;
        case "UTC-03.00": var value = -4; return value;
        case "UTC-02.00": var value = -3; return value;
        case "UTC-01.00": var value = -2; return value;
        case "UTC+00.00": var value = -1; return value;
        case "UTC+01.00": var value = 0; return value;
        case "UTC+02.00": var value = 1; return value;
        case "UTC+03.00": var value = 2; return value;
        case "UTC+04.00": var value = 3; return value;
        case "UTC+05.00": var value = 4; return value;
        case "UTC+06.00": var value = 5; return value;
        case "UTC+07.00": var value = 6; return value;
        case "UTC+08.00": var value = 7; return value;
        case "UTC+09.00": var value = 8; return value;
        case "UTC+10.00": var value = 9; return value;
        case "UTC+11.00": var value = 10; return value;
        case "UTC+12.00": var value = 11; return value;
    }
}*/


function checkTimezone(timezone) {
	var val = function(timezone) {
		switch(timezone) {
	        case "(UTC-12.00)": var value = -13; return value; 
	        case "UTC-11.00": var value = -12; return value; 
	        case "UTC-10.00": var value = -11; return value; 
	        case "UTC-09.00": var value = -10; return value; 
	        case "UTC-08.00": var value = -9; return value; 
	        case "UTC-07.00": var value = -8; return value; 
	        case "UTC-06.00": var value = -7; return value; 
	        case "UTC-05.00": var value = -6; return value; 
	        case "UTC-04.00": var value = -5; return value; 
	        case "UTC-03.00": var value = -4; return value; 
	        case "UTC-02.00": var value = -3; return value; 
	        case "UTC-01.00": var value = -2; return value; 
	        case "UTC+00.00": var value = -1; return value; 
	        case "(UTC+01.00)": var value = 0; return value; 
	        case "UTC+02.00": var value = 1; return value; 
	        case "UTC+03.00": var value = 2; return value; 
	        case "UTC+04.00": var value = 3; return value; 
	        case "UTC+05.00": var value = 4; return value; 
	        case "UTC+06.00": var value = 5; return value; 
	        case "UTC+07.00": var value = 6; return value; 
	        case "UTC+08.00": var value = 7; return value; 
	        case "UTC+09.00": var value = 8; return value; 
	        case "UTC+10.00": var value = 9; return value; 
	        case "UTC+11.00": var value = 10; return value; 
	        case "UTC+12.00": var value = 11; return value; 

	    };
	    return value;
	}
	displayTime(val);
};


function displayTime(val) {
	var date = new Date();
	var h = date.getHours();
	console.log(typeof val());
	/*console.log(typeof h);
	console.log(typeof date.getHours());*/
	var m = date.getMinutes();
	var s = date.getSeconds();
   
	var time = formatHour(h) + ":" + addPrefix(m) + ":" + addPrefix(s) + " " + getPeriod(h);
	console.log(h);
    //console.log(time);
	function addPrefix(num) {
    	if (num < 10) {
    		return "0" + String(num);
    	}
    	else {
    		return String(num);
    	}
    };

    function formatHour(num) {
    	if (num > 12) {
    		return num % 12;
    	}
    	else if (num == 0) {
    		return 12;
    	}
    	else {
    		return num;
    	}
    };

    function getPeriod(num) {
    	if (num > 11) {
    		var period = "PM";
    		return period;
    	}
    	else {
    		var period = "AM";
    		return period;
    	}
    };
	
    var canvas1 = document.getElementById("clock1");
    var canvas2 = document.getElementById("clock2");
    var canvas3 = document.getElementById("clock3");
    var ctx1 = canvas1.getContext("2d");
    var ctx2 = canvas2.getContext("2d");
    var ctx3 = canvas3.getContext("2d");
    var radius = 100;

    var x1 = canvas1.width / 2;
    var x2 = canvas2.width / 2;
    var x3 = canvas3.width / 2;
    var y1 = canvas1.height / 2;
    var y2 = canvas2.height / 2; 
    var y3 = canvas3.height / 2; 

    function drawHand(shift, armLength, armColor) {
    	
        angle = (2 * Math.PI * shift) - (Math.PI / 2);
    	var pointX1 = x1 + (Math.cos(angle) * (armLength * radius));
    	var pointX2 = x2 + (Math.cos(angle) * (armLength * radius));
    	var pointX3 = x3 + (Math.cos(angle) * (armLength * radius));
    	var pointY1 = y1 + (Math.sin(angle) * (armLength * radius));
    	var pointY2 = y2 + (Math.sin(angle) * (armLength * radius));
    	var pointY3 = y3 + (Math.sin(angle) * (armLength * radius));
       
    	ctx1.lineWidth = 5;
    	ctx2.lineWidth = 5;
    	ctx3.lineWidth = 5;

    	ctx1.beginPath();
    	ctx2.beginPath();
    	ctx3.beginPath();
    	ctx1.moveTo(x1, y1);
    	ctx2.moveTo(x2, y2);
    	ctx3.moveTo(x3, y3);
    	ctx1.lineTo(pointX1, pointY1);
    	ctx2.lineTo(pointX2, pointY2);
    	ctx3.lineTo(pointX3, pointY3);
    	ctx1.stroke();
    	ctx2.stroke();
    	ctx3.stroke();

    };
	ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
	ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
	ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
	drawHand(h / 12, 0.50, '#000000'); // Hour
	drawHand(m / 60, 0.75, '#000000'); // Minute
	drawHand(s / 60, 1.00, 'blue'); // Second*/
};