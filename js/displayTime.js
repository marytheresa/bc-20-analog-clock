var Clock = function(timezone, canvas) {
    this.timezone = timezone;
    this.canvas = canvas
}

Clock.prototype.startTimer = function() {
	setInterval(this.checkTimezone(this.timezone), 1000);
	return this.checkTimezone(this.timezone);
}

Clock.prototype.checkTimezone = function() {
    var val = function(timezone) {
		  switch(timezone) {
	        case "(UTC-12.00)": var value = -13; return value; 
	        case "(UTC-11.00)": var value = -12; return value; 
	        case "(UTC-10.00)": var value = -11; return value; 
	        case "(UTC-09.00)": var value = -10; return value; 
	        case "(UTC-08.00)": var value = -9; return value; 
	        case "(UTC-07.00)": var value = -8; return value; 
	        case "(UTC-06.00)": var value = -7; return value; 
	        case "(UTC-05.00)": var value = -6; return value; 
	        case "(UTC-04.00)": var value = -5; return value; 
	        case "(UTC-03.00)": var value = -4; return value; 
	        case "(UTC-02.00)": var value = -3; return value; 
	        case "(UTC-01.00)": var value = -2; return value; 
	        case "(UTC+00.00)": var value = -1; return value; 
	        case "(UTC+01.00)": var value = 0; return value; 
	        case "(UTC+02.00)": var value = 1; return value; 
	        case "(UTC+03.00)": var value = 2; return value; 
	        case "(UTC+04.00)": var value = 3; return value; 
	        case "(UTC+05.00)": var value = 4; return value; 
	        case "(UTC+06.00)": var value = 5; return value; 
	        case "(UTC+07.00)": var value = 6; return value; 
	        case "(UTC+08.00)": var value = 7; return value; 
	        case "(UTC+09.00)": var value = 8; return value; 
	        case "(UTC+10.00)": var value = 9; return value; 
	        case "(UTC+11.00)": var value = 10; return value; 
	        case "(UTC+12.00)": var value = 11; return value; 
      }
	    return value;
	};
	displayTime(2);
};

Clock.prototype.displayTime = function(val) {
  var date = new Date();
	var timeDiff = val * 60 + date.getTimezoneOffset();
	date = new Date(date.getTime() + timeDiff * 60 * 1000);
	var h = date.getHours();
	/*console.log(typeof h);
	console.log(typeof date.getHours());*/
	var m = date.getMinutes();
	var s = date.getSeconds();
  var ctx = this.canvas.getContext("2d");
  var radius = 100;
  var x = this.canvas.width / 2;
  var y = this.canvas.height / 2;
  
  function drawHand(shift, armLength, armColor) {
    angle = (2 * Math.PI * shift) - (Math.PI / 2);
    var pointX = x + (Math.cos(angle) * (armLength * radius));
    var pointY = y + (Math.sin(angle) * (armLength * radius));

    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(pointX, pointY);
    ctx.stroke();
    
  };
	ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	drawHand(h / 12, 0.50, '#000000'); // Hour
	drawHand(m / 60, 0.75, '#000000'); // Minute
	drawHand(s / 60, 1.00, 'blue'); // Second*/
}

var clock1 = new Clock("(UTC-07)", document.getElementById("clock1"));
var clock2 = new Clock("(UTC-01)", document.getElementById("clock2"));
var clock3 = new Clock("(UTC-02)", document.getElementById("clock3"));