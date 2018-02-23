/*
Programmeerproject: "Ontkerkelijking in Nederland"
Name: Morena Bastiaansen
Student number: 10725792

barchart.js
File with JavaScript code for barchart for data visualization on religion in the Netherlands
*/


// Function that loads barchart.
function loadBarchart(provincie){

    // Variables for the width, height and margins of the SVG element.
    var margin = {top: 30, right: 180, bottom: 80, left: 180},
        width = 600 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;

    // Variable for the div element of the tooltip.
    var tooltip = d3.select("body").append("div")   
        .attr("class", "tooltip")               
        .style("opacity", 0);

    // Create SVG element and add group and title.
    var chart = d3.select("#barchart").append("svg")
        .attr("id", "chart")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("id", "chartGroup")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    // Load JSON data.
    d3.json("kerkelijke_bezoeken.json", function(error, data){

        // Filter year.
        var data = data.filter(function(d){return d.provincie == provincie;});

        // Get every column value
        var elements = Object.keys(data[0])
            .filter(function(d){
                return ((d != "provincie") & (d != "frequentie") & (d != "percentage"));
            });
        
        var selection = elements[0];

        //Variables to make the axes.
        var y = d3.scale.linear()
                .domain([0,100])
                .range([height, 0]);

        var x = d3.scale.ordinal()
                .domain(data.map(function(d){ return d.frequentie;}))
                .rangeBands([0, width]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

        // Add the axes and bars to the SVG element and add data and tooltip to the bars.
        chart.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .selectAll("text")
            .style("font-size", "10px")
            .style("font-family", "Lato")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", "-.55em")
            .attr("transform", "rotate(-30)" );

        chart.append("g")
            .attr("class", "y axis")
            .call(yAxis);

        chart.selectAll("rectangle")
            .data(data)
            .enter()
            .append("rect")
            .attr("class","rectangle")
            .attr("width", width/data.length)
            .attr("height", function(d){
                return height - y(+d[selection]);
            })
            .attr("x", function(d, i){
                return (width / data.length) * i ;
            })
            .attr("y", function(d){
                return y(+d[selection]);
            })

        // Add tooltip.
        chart.selectAll("rect")
            .on("mouseover", function (d) {
                d3.select(this).style("stroke-opacity", 1.0);
                tooltip.transition().duration(300)
                .style("opacity", 1)
                tooltip.text(d.frequentie+ ": " +d[selection]+"%")
                .style("left", d3.event.pageX + "px")
                .style("top", d3.event.pageY - 30 + "px");
            })
            .on("mouseout", function () {
                    d3.select(this)
                    .style("stroke-opacity", 0);
                    tooltip.transition().duration(0)
                    .style("opacity",0.8);
                    tooltip.transition().duration(0)
                    .style("opacity",0);
            });
    });

};