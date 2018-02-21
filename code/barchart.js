/*
Programmeerproject
Name: Morena Bastiaansen
Student number: 10725792

barchart.js
File with JavaScript code for bar chart on religion in the Netherlands
*/


// Function that loads barchart.
function loadBarchart(provincie){

    // Variables for the width, height and margins of the SVG element.
    var margin = {top: 30, right: 180, bottom: 80, left: 180},
        width = 600 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;

    // Create SVG element and add group and title.
    var chart = d3.select("#barchart").append("svg")
        .attr("id", "chart")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("id", "chartGroup")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    var chartTitle = chart.append("text")
        .attr("x", (width/2))
        .attr("y", 0 - (margin.top/2))
        .attr("text-anchor", "middle").style("font-size", "16px")
        .text("Frequentie kerkbezoek voor geselecteerde provincie");

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
            .append("title")
            .text(function(d){
                return (d.frequentie + ": " + d[selection] + "%");
            });

    });

};