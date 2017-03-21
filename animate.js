// Initialization
var s = document.getElementById("world");
var ns = "http://www.w3.org/2000/svg";
var height = $(window).height() * 0.83;
var width = $(window).width();
s.height = height;
s.width = width;

var rid = -1;
var getRandomColor = function() {
    var newColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' +
	Math.floor(Math.random() * 256) + ',' + 
	Math.floor(Math.random() * 256) + ')';
    return newColor;
}

var bg = document.createElementNS(ns, "rect");
bg.setAttribute("width", width);
bg.setAttribute("height", height);
bg.setAttribute("style", "fill:rgb(240,240,240)");
s.appendChild(bg);
console.log(bg);    
var revenues = document.createElementNS(ns, "circle");
revenues.setAttribute("style", "fill:" + getRandomColor());
revenues.setAttribute("cy", height * Math.random() * 0.8);
revenues.setAttribute("cx", width * Math.random() * 0.8);
s.appendChild(revenues);
var spending = document.createElementNS(ns, "circle");
spending.setAttribute("style", "fill:" + getRandomColor());
spending.setAttribute("cy", height * Math.random() * 0.8);
spending.setAttribute("cx", width * Math.random() * 0.8);
s.appendChild(spending);
var debt = document.createElementNS(ns, "circle");
debt.setAttribute("style", "fill:" + getRandomColor());
debt.setAttribute("cy", height * Math.random() * 0.8);
debt.setAttribute("cx", width * Math.random() * 0.8);
s.appendChild(debt);
var gdp = document.createElementNS(ns, "circle");
gdp.setAttribute("style", "fill:" + getRandomColor());
gdp.setAttribute("cy", height * Math.random() * 0.8);
gdp.setAttribute("cx", width * Math.random() * 0.8);
s.appendChild(gdp);

var gdp2 = document.createElementNS(ns, "circle");
gdp2.setAttribute("style", "fill:" + getRandomColor());
gdp2.setAttribute("cy", height * Math.random() * 0.8);
gdp2.setAttribute("cx", width * Math.random() * 0.8);
s.appendChild(gdp2);

// Backend Functions
d3.selectAll("circle").attr("r", 0);
// Adding Event Listeners
var rr = document.getElementById("reagan");
rr.addEventListener("click", function() {
    d3.selectAll("text").remove();
    var data = [55.7, 44.3, 22.7, 17.4, 5.0];
    var names = ["social security", "defense", "interest", "medicare", "education"];
    var circs = d3.selectAll("circle");
    circs.data(data);
    circs.transition().duration(2000).attr("r", function(d) { return d * 3.5; });
    var text = d3.select("[id='world']").selectAll("text").data(names).enter().append("text");
    text.attr("x", function(d,i) { return circs[0][i].getAttribute('cx');});
    text.attr("y", function(d,i) { return circs[0][i].getAttribute('cy');});
    text.text(function(d,i) {return d + ":" + Math.round((data[i]* 10) * 10)/10 + "billion";});
    text
	.attr("font-family", "sans-serif")
        .attr("font-size", "12px")
        .attr("fill", "white")
	.attr("text-anchor", "middle");
    ;} );
var dt = document.getElementById("trump");
dt.addEventListener("click", function() {
    d3.selectAll("text").remove();
    var data = [132.7, 54.2, 26.6,  103.1, 9.4 ];
    var names = ["social security", "defense", "interest", "medicare", "education"];
    var circs = d3.selectAll("circle");
    circs.data(data);
    circs.transition().duration(2000).attr("r", function(d) { return d * 3.5; });
    var text = d3.select("[id='world']").selectAll("text").data(names).enter().append("text");
    text.attr("x", function(d,i) { return circs[0][i].getAttribute('cx');});
    text.attr("y", function(d,i) { return circs[0][i].getAttribute('cy');});
    text.text(function(d,i) {return d + ":" + Math.round((data[i] *10) * 10)/10 + "billion";});
    text
	.attr("font-family", "sans-serif")
        .attr("font-size", "12px")
        .attr("fill", "white")
	.attr("text-anchor", "middle");
    ;} );

console.log("Loaded js.");
