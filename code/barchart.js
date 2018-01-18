/*
Programmeerproject
Name: Morena Bastiaansen
Student number: 10725792

barchart.js
File with JavaScript code for bar chart about religion in the Netherlands
*/


var margin = 40;
var width = 900 - 2*margin;
var height = 500 - 2*margin;

// get the right data and compose the chart
function get_data(file_name, chart, x, y) {
	d3.json(file_name, function(data) {
		var data = data.filter(function(d){return d.jaar == '2010';});
		var data = data.filter(function(d){return d.provincie == 'Friesland';});
		var len = data.length;
		for (var n = 0; n < len; n++) {
			data[n]["gezindte"] = String(data[n]["gezindte"]);
			data[n]["percentage"] = Number(data[n]["percentage"]);
		}

	console.log(data)
	// define domains
	x.domain(data.map(function(d) {return d.gezindte; }));
	y.domain([d3.min(data, function(d) { return d.percentage; })-1, 
			  100])

	// create variable for bars
	var bar = chart.selectAll(".bar")
		.data(data)
	.enter().append("g")
		.attr("id", function(d) { return "g" + d.gezindte});

	// create rectangles for bars
	bar.append("rect")
		.attr("class", "bar")
		.attr("x", function(d) { return x(d.gezindte); })
		.attr("y", function(d) { return y(d.percentage); })
		.attr("width", x.bandwidth())
      	.attr("height", function(d) { return height - y(d.percentage); })
		.on("mouseover", mouse_hover)
		.on("mouseout", mouse_off);

	// functions to control hovering
	function mouse_hover(d) {
		chart.select("#g"+d.gezindte)
			.append("text")
				.attr("id", "t" + d.gezindte)
				.attr("class", "tooltip")
				.attr("x", function(d){ return x(d.gezindte) + x.bandwidth()/2; })
				.text(function(d) { return d.percentage; });
	}

	function mouse_off(d) {
		d3.select("#t" + d.gezindte)
			.remove();
	}
		
	// make axes
	chart.append("g")
		.attr("class", "title")
	.append("text")
		.attr("x", width/2)
		.text("Verdelingen kerkelijke gezindten");
		
  	chart.append("g")
      	.attr("transform", "translate(0," + height + ")")
      	.call(d3.axisBottom(x))

    chart.append("text")             
    	.attr("transform",
              "translate(" + (width) + " ," + 
                             (height + 30) + ")")
      .style("text-anchor", "middle")
      .text("Gezindte");

    chart.append("g")
    	.call(d3.axisLeft(y))

    chart.append("text")             
      .attr("transform",
            "translate(" + (width/2) + " ," + 
                           (height + margin.top - 30) + ")")
      .style("text-anchor", "middle")
      .text("Percentage");

	});

}

// create function to make the chart 
function make_chart(file_name) {
	var chart = d3.select(".chart")
	.attr("width", width + 2*margin)
	.attr("height", height + 2*margin)
.append("g")
	.attr("transform", "translate("+margin+","+margin+")");

	var x = d3.scaleBand()
		.range([0, width])
		.paddingInner(0.1)
		.paddingOuter(0.2);
	var y = d3.scaleLinear()
		.range([height,0]);

	get_data(file_name, chart, x, y);
}


// call function to make barchart
make_chart("kerkelijke_gezindten.json");