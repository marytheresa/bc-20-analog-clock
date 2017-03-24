var Clock = function(timezone, canvas) {
    this.timezone = timezone;
    this.canvas = canvas
}

Clock.prototype.displayTime = function(val) {
    var date = new Date();
	var timeDiff = val * 60 + date.getTimezoneOffset();
	date = new Date(date.getTime() + timeDiff * 60 * 1000);
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
    var ctx = this.canvas.getContext("2d");
    var radius = 200;
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
	drawHand(h / 12 + m / 60, 0.50, '#000000'); // Hour
	drawHand(m / 60, 0.75, '#000000'); // Minute
	drawHand(s / 60, 1.00, '#a32638'); // Second

    function outerClockFrame() {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 5;
        ctx.stroke();
    };
    outerClockFrame();

    function hourMarkings(armLength) {
        for (var i = 0; i < 12; i++) {
            angleInRadians = ((i / 12) * 2 * Math.PI * radius)-(Math.PI / 2);
            ctx.lineWidth = 15;
            ctx.beginPath();

            var x1 = (x) + (Math.cos(angleInRadians) * armLength);
            var y1 = (y) + (Math.sin(angleInRadians) * armLength);
            var x2 = (x) + (Math.cos(angleInRadians) * (armLength - (armLength / 7)));
            var y2 = (y) + (Math.sin(angleInRadians) * (armLength - (armLength / 7)));

            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = '#000000';
            ctx.stroke();
        }
    };
    hourMarkings(0.50);
}

var clock1 = new Clock("(UTC+01)", document.getElementById("clock1"));
var clock2 = new Clock("(UTC+01)", document.getElementById("clock2"));
var clock3 = new Clock("(UTC+01)", document.getElementById("clock3"));

function changeTime() {
    var e = document.getElementsByClassName("timeZones");
    console.log(">>>>>>>>>>>>>>>>", e);
    setInterval(function() {
        clock3.displayTime(Number(e[2].value));
        clock2.displayTime(Number(e[1].value));
        clock1.displayTime(1);
    }, 1000)
}