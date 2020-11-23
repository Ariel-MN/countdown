// Analog Clock
function Clock() {
    // Canvas configuration
    this.canvas=document.getElementsByTagName('canvas')[0];
    this.canvas.width=400;
    this.canvas.height=400;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.scale(2, 2);

    this.setHour();
    var self=this;
    this.interval = setInterval(function(){self.update();},1000);
}
// Clock configuration
Clock.prototype.setHour=function() {
    var hour = new Date();
    this.seconds=hour.getSeconds();
    this.minutes=hour.getMinutes();
    this.hours=(hour.getHours()>12?hour.getHours()-12:(hour.getHours()==0)?12:hour.getHours());

    this.rad12=2*Math.PI/12;
    this.rad60=2*Math.PI/60;
}
Clock.prototype.increment=function() {
    this.seconds=(++this.seconds)%60;
    if (this.seconds==0) {
        this.minutes=(++this.minutes)%60;
        if (this.minutes==0)
        {
            this.hours=(++this.hours)%12;
        }
    }
}
Clock.prototype.draw=function() {
    this.ctx.clearRect(0,0,200,200);
    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = "transparent";
    this.ctx.beginPath();
    this.ctx.arc(100, 100, 95, 0, 2 * Math.PI, false);
    this.ctx.stroke();

    this.ctx.save();
    this.ctx.translate(100,100);

    // Clock numbers font and position
    this.ctx.font = "bold 20px serif";
    this.ctx.fillStyle="white";
    this.ctx.fillText(12,-10,-69);
    this.ctx.fillText(6,-6,82);
    this.ctx.fillText(1,32,-58);
    this.ctx.fillText(7,-45,70);
    this.ctx.fillText(2,60,-32);
    this.ctx.fillText(8,-70,46);
    this.ctx.fillText(3,70,5);
    this.ctx.fillText(9,-82,5);
    this.ctx.fillText(4,60,47);
    this.ctx.fillText(10,-72,-29);
    this.ctx.fillText(5,33,72);
    this.ctx.fillText(11,-47,-57);

    // Small indices of watch dial
    for (var i=0;i<30;i++) {
        this.ctx.save();
        this.ctx.rotate(i*this.rad60);
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = "white";
        this.ctx.beginPath();
        this.ctx.moveTo(0,-90);
        this.ctx.lineTo(0,-95);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(0,90);
        this.ctx.lineTo(0,95);
        this.ctx.stroke();
        this.ctx.restore();
    }

    // Large indices of watch dial
    for (var i=0;i<6;i++) {
        this.ctx.save();
        this.ctx.rotate(i*this.rad12);
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = "white";
        this.ctx.beginPath();
        this.ctx.moveTo(0,-85);
        this.ctx.lineTo(0,-95);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(0,85);
        this.ctx.lineTo(0,95);
        this.ctx.stroke();
        this.ctx.restore();
    }

    // Minutes hand of the clock
    this.ctx.save();
    this.ctx.rotate(this.minutes*this.rad60+this.seconds/60*this.rad60);
    this.ctx.lineWidth = 4;
    this.ctx.strokeStyle = "#c0c0c0";
    this.ctx.beginPath();
    this.ctx.lineCap = "round";
    this.ctx.moveTo(0,03);
    this.ctx.lineTo(0,-70);
    this.ctx.stroke();
    this.ctx.restore();

    // Hours hand of the clock
    this.ctx.save();
    this.ctx.rotate(this.hours*this.rad12+this.minutes/60*this.rad12);
    this.ctx.lineWidth = 6;
    this.ctx.strokeStyle = "white";
    this.ctx.beginPath();
    this.ctx.lineCap = "round";
    this.ctx.moveTo(0,3);
    this.ctx.lineTo(0,-55);
    this.ctx.stroke();
    this.ctx.restore();
    // Head of the hours hand
    this.ctx.save();
    this.ctx.fillStyle = "white";
    this.ctx.beginPath();
    this.ctx.arc(0, 0, 6, 0, 2 * Math.PI, false);
    this.ctx.fill();
    this.ctx.restore();
    
    // Seconds hand of the clock
    this.ctx.save();
    this.ctx.rotate(this.seconds*this.rad60);
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = "OrangeRed";
    this.ctx.beginPath();
    this.ctx.lineCap = "round";
    this.ctx.moveTo(0,15);
    this.ctx.lineTo(0,-80);
    this.ctx.stroke();
    this.ctx.restore();
    this.ctx.restore();
    // Head of the seconds hand
    this.ctx.fillStyle = "OrangeRed";
    this.ctx.beginPath();
    this.ctx.arc(100, 100, 4, 0, 2 * Math.PI, false);
    this.ctx.fill();
    
}
Clock.prototype.update=function() {
    this.increment();
    this.draw();
    // console.log(this.hours+":"+this.minutes+":"+this.seconds);
}

var clock = new Clock();