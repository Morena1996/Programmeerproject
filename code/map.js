/*
Programmeerproject
Name: Morena Bastiaansen
Student number: 10725792

map.js
File with JavaScript code for map on religion in the Netherlands
*/

// Function that loads the map.
function loadMap(data) {
    // Make variables for the width and height of SVG element.
    var width = 600,
        height = 400;

    var color_domain = [50, 150, 350, 750]
    var ext_color_domain = [0, 50, 150, 350, 750]
    var legend_labels = ["30% - 40%", "40% - 50%", "50% - 60%", "60% - 70%", "70% - 80%"]
    var color = d3.scale.threshold()
        .domain(color_domain)
        .range(["#7dc6be","#6aa59e","#366d67","#21544e","#0f3a35"]);

    console.log(color)

    // Make variable for the div element of the tooltip.
    var div = d3.select("body").append("div")   
        .attr("class", "tooltip")               
        .style("opacity", 0);


    // This variable links the colours to the quantiles.
    var quantize = d3.scale.quantize()
        .domain([0, 100])
        .range(d3.range(0, 100, 10).map(function(i) { return i/10; }));

    // Array of colours to fill in the provinces.
    var colour = ["#eff9f8","#caf7f2","#a4fcf2","#7dc6be","#6aa59e","#4e8982","#366d67","#21544e","#0f3a35","#0c0730"]

    // Append group to SVG element.
    var mainGroup = d3.select("#map").append("svg").attr("id", "svgmap")
        .attr("width", width)
        .attr("height", height)
    .append("g").attr("id", "mainGroup");
    
    mainGroup.style({ stroke: "white", "stroke-width": "2px", "stroke-opacity": 0.0 });

    mainGroup.append("text").attr("x", (width/2)).attr("y", 0 - (height)).attr("text-anchor", "middle").style("font-size", "16px").text("Percentage inwoners dat zichzelf tot kerkelijke gezindte rekent");

    // Make variable for the way the map will be projected on the screen and the path.
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

            // Make variable for the provinces.
            var subunits = topojson.feature(nld, nld.objects.subunits).features;

            // Add provinces to the "g" element and colour them according to the data.
            mainGroup.selectAll("path", "subunits")
                .data(subunits)
                .enter().append("path")
                .attr("d", path)
                .attr("fill", function(d) { return colour[quantize(d.properties.religious)]
                })


            var legend = mainGroup.selectAll("g.legend")
              .data(ext_color_domain)
              .enter().append("g")
              .attr("class", "legend");

              var ls_w = 20, ls_h = 20;

              legend.append("rect")
              .attr("x", 200)
              .attr("y", function(d, i){ return height - 200 - (i*ls_h) - 2*ls_h;})
              .attr("width", ls_w)
              .attr("height", ls_h)
              .style("fill", function(d, i) { return color(d); })
              .style("opacity", 0.8);

              legend.append("text")
              .attr("x", 230)
              .attr("y", function(d, i){ return height - 200 - (i*ls_h) - ls_h - 4;})
              .text(function(d, i){ return legend_labels[i]; });

            // Add tooltip.
            mainGroup.selectAll("path")
                .on("mouseover", function (d) {
                    d3.select(this).style("stroke-opacity", 1.0);
                    div.transition().duration(300)
                    .style("opacity", 1)
                div.text(d.properties.name+ ": " +d.properties.religious+"%")
                    .style("left", d3.event.pageX + "px")
                    .style("top", d3.event.pageY - 30 + "px");
                 })
                .on("mouseout", function () {
                    d3.select(this)
                    .style("stroke-opacity", 0);
                    div.transition().duration(0)
                    .style("opacity",0.8);
                    div.transition().duration(0)
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

