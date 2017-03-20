// Initialization
var s = document.getElementById("world");
var ns = "http://www.w3.org/2000/svg";
var height = $(window).height() * 0.83;
var width = $(window).width();
s.height = height;
s.width = width;

var rid = -1;

var bg = document.createElementNS(ns, "rect");
bg.setAttribute("width", width);
bg.setAttribute("height", height);
bg.setAttribute("style", "fill:rgb(240,240,240)");
s.appendChild(bg);
console.log(bg);    

// Backend Functions
var getRandomColor = function() {
    var newColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' +
	Math.floor(Math.random() * 256) + ',' + 
	Math.floor(Math.random() * 256) + ')';
    return newColor;
}

// Adding Event Listeners
var rr = document.getElementById("reagan");
rr.addEventListener("click", function() {;} );
var dt = document.getElementById("trump");
dt.addEventListener("click", function() {;} );

console.log("Loaded js.");
