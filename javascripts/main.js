//Creating circle

var v1 = document.getElementById("can");
var canvas = v1.getContext("2d");

var x = document.getElementById("x");
var y = document.getElementById("y");
var rad = document.getElementById("rad");
var color = document.getElementById("color");

var paint = function(){
		canvas.fillStyle = color.value;
		canvas.beginPath();
		canvas.arc(x.value,y.value,rad.value,0,2*Math.PI);
		canvas.fill();
};
	
		
		
