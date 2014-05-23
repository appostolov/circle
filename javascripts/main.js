//Creating circle

var v1 = document.getElementById("can");
var canvas = v1.getContext("2d");

var x = v1.width/2;
var y = v1.height/2;

var r = 200;

var op = 1;
var color = "0,0,255,";

canvas.fillStyle = "#cc9";
canvas.fillRect(0,0,v1.width,v1.height);

canvas.fillStyle = "#000";
canvas.fillRect(x,y,2,2);

var u = x+r;
var v = y;

var int = setInterval(function(){
	
		canvas.fillStyle = "rgba("+color+op+")";
		canvas.fillRect(u,v,2,2);
		
		if(v<=y){
			u -= 1;
			v = y - Math.sqrt(Math.pow(r,2)-Math.pow(u-x,2));
		}
		
		if(v>=y){
			u += 1;
			v = y + Math.sqrt(Math.pow(r,2)-Math.pow(u-x,2));
			if(u>x+r-1){
				clearInterval(int);
			}
		}
		
}, 17);
