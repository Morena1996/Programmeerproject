/*
Programmeerproject
Name: Morena Bastiaansen
Student number: 10725792

gauge.js
File with JavaScript code for map about religion in the Netherlands
*/

function loadMap() {

    var width = 500,
        height = 400;


    var div = d3.select("body").append("div")   
        .attr("class", "tooltip")               
        .style("opacity", 0);

    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height);


    var quantize = d3.scale.quantize()
        .domain([0, 100])
        .range(d3.range(0, 100, 10).map(function(i) { return i/10; }));

    var colour = ["#eff9f8","#caf7f2","#a4fcf2","#7dc6be","#6aa59e","#4e8982","#366d67","#21544e","#0f3a35","#0c0730"]

    var mainGroup = svg.append("g");
    mainGroup.style({ stroke: "white", "stroke-width": "2px", "stroke-opacity": 0.0 });

    var projection = d3.geo.mercator()
        .scale(1)
        .translate([0, 0]);

    var path = d3.geo.path()
        .projection(projection);

    var div = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 1e-6);

    d3.json("nld.json", function(error, nld) {
            console.log(nld);


            var l = topojson.feature(nld, nld.objects.subunits).features[3],
                b = path.bounds(l),
                s = .2 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height),
                t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];

            projection
                .scale(s)
                .translate(t);


            var subunits = topojson.feature(nld, nld.objects.subunits).features;

            mainGroup.selectAll("path", "subunits")
                .data(subunits)
                .enter().append("path")
                .attr("d", path)
                .attr("fill", function(d) { return colour[quantize(d.properties.rate)]
                })


             mainGroup.selectAll("path")
                .on("mouseover", function (d) {
                    console.log("mouseover");
                    d3.select(this).style("stroke-opacity", 1.0);
                    div.transition().duration(300)
                    .style("opacity", 1)
                    div.text(d.properties.name+ ": " +d.properties.rate+"%")
                    .style("left", d3.event.pageX + "px")
                    .style("top", d3.event.pageY - 30 + "px");
                })
                .on("mouseout", function () {
                    d3.select(this)
                    .style("stroke-opacity", 0);
                    div.transition().duration(300)
                    .style("opacity",0.8);
                    div.transition().duration(300)
                    .style("opacity",0);
                });

    });

};

loadMap();