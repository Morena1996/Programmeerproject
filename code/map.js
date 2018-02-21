/*
Programmeerproject
Name: Morena Bastiaansen
Student number: 10725792

map.js
File with JavaScript code for map on religion in the Netherlands
*/

// Function to load the map.
function loadMap(data) {

    // Variables for the width, height and margins of the SVG element.
    var width = 700,
        height = 400,
        margin = {top: 50, right: 100, bottom: 80, left: 100};

    // Array for the colours of the provinces.
    var colour = ["#eff9f8","#caf7f2","#a4fcf2","#7dc6be","#6aa59e","#4e8982","#366d67","#21544e","#0f3a35","#0c0730"]

    // Arrays for the colours the legend.
    var colour_domain = [50, 60, 70, 80]
    var colour_domain_ext = [40, 50, 60, 70, 80]
    var legend_labels = ["30% - 40%", "40% - 50%", "50% - 60%", "60% - 70%", "70% - 80%"]
    var colour_legend = d3.scale.threshold()
        .domain(colour_domain)
        .range(colour.slice(3,8));

    // Quantize maps the colours for the provinces to the corresponding quantiles.
    var quantize = d3.scale.quantize()
        .domain([0, 100])
        .range(d3.range(0, 100, 10).map(function(i) { return i/10; }));

    // Variable for the div element of the tooltip.
    var tooltip = d3.select("body").append("div")   
        .attr("class", "tooltip")               
        .style("opacity", 0);

    // Create SVG element and add group and title.
    var svgMap = d3.select("#map").append("svg")
        .attr("id", "svgMap")
        .attr("width", width)
        .attr("height", height)
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .append("g").attr("id", "mapGroup")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .style({ stroke: "white", "stroke-width": "2px", "stroke-opacity": 0.0 });

    var mapTitle = svgMap.append("text")
        .attr("x", (width/2 + 40)).attr("y", 5)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .text("Percentage inwoners dat zichzelf tot kerkelijke gezindte rekent");

    // Variable for the way the map will be projected on the screen and the path.
    var projection = d3.geo.mercator()
        .scale(1)
        .translate([0, 0]);

    var path = d3.geo.path()
        .projection(projection);

    // Load JSON data.
    d3.json(data, function(error, nld) {

            var l = topojson.feature(nld, nld.objects.subunits).features[3],
                b = path.bounds(l),
                s = .2 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height),
                t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];

            projection
                .scale(s)
                .translate(t);

            // Variable for the provinces.
            var subunits = topojson.feature(nld, nld.objects.subunits).features;

            // Add provinces to the SVG element and colour them according to the data.
            svgMap.selectAll("path", "subunits")
                .data(subunits)
                .enter().append("path")
                .attr("d", path)
                .attr("fill", function(d) { return colour[quantize(d.properties.religious)]
                })

            // Add the legend.
            var legend = svgMap.selectAll("g.legend")
              .data(colour_domain_ext)
              .enter().append("g")
              .attr("class", "legend");

            var ls_w = 20, ls_h = 20;
              
            legend.append("rect")
              .attr("x", 250)
              .attr("y", function(d, i){ return height - 230 - (i*ls_h) - 2*ls_h;})
              .attr("width", ls_w)
              .attr("height", ls_h)
              .style("fill", function(d, i) { return colour_legend(d); })
              .style("opacity", 0.8);

            legend.append("text")
              .attr("x", 280)
              .attr("y", function(d, i){ return height - 230 - (i*ls_h) - ls_h - 4;})
              .text(function(d, i){ return legend_labels[i]; });

            // Add tooltip.
            svgMap.selectAll("path")
                .on("mouseover", function (d) {
                    d3.select(this).style("stroke-opacity", 1.0);
                    tooltip.transition().duration(300)
                    .style("opacity", 1)
                tooltip.text(d.properties.name+ ": " +d.properties.religious+"%")
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
                })
                
                //Add functionality that calls functions loadBarchart and loadGauge when province is clicked.
                .on("click", function (d) {
                    removeGauge();
                    removeBarchart();
                    loadDropdown(d.properties.married, d.properties.oneparent);
                    loadBarchart(d.properties.name);
                });

    });

};

