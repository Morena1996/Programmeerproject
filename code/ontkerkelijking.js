/*
Programmeerproject
Name: Morena Bastiaansen
Student number: 10725792

ontkerkelijking.js
File with JavaScript code for data visualization on religion in


The example I used for the gauge is to be found here: http://bl.ocks.org/brattonc/5e5ce9beee483220e2f6
*/

// Function that loads the map.
function loadMap() {

    // Make variables for the width and height of SVG element.
    var width = 600,
        height = 400;

    // Make variable for the div element of the tooltip.
    var div = d3.select("body").append("div")   
        .attr("class", "tooltip")               
        .style("opacity", 0);

    // Make variable for the SVG element.
    var svg = d3.select("#map").append("svg")
        .attr("width", width)
        .attr("height", height);

    // Quantize links colours to quantiles.
    var quantize = d3.scale.quantize()
        .domain([0, 100])
        .range(d3.range(0, 100, 10).map(function(i) { return i/10; }));

    // Array of colours to fill in the provinces.
    var colour = ["#eff9f8","#caf7f2","#a4fcf2","#7dc6be","#6aa59e","#4e8982","#366d67","#21544e","#0f3a35","#0c0730"]

    // Append group to SVG element.
    var mainGroup = svg.append("g").attr("id", "mainGroup");
    mainGroup.style({ stroke: "white", "stroke-width": "2px", "stroke-opacity": 0.0 });

    // Make variable for the way the map will be projected on the screen and the path.
    var projection = d3.geo.mercator()
        .scale(1)
        .translate([0, 0]);

    var path = d3.geo.path()
        .projection(projection);

    // Load JSON data.
    d3.json("nld.json", function(error, nld) {

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
                .attr("fill", function(d) { return colour[quantize(d.properties.religious10)]
                })


            // Add tooltip.
             mainGroup.selectAll("path")
                .on("mouseover", function () {
                    d3.select(this).style("stroke-opacity", 1.0);
                    div.transition().duration(300)
                    .style("opacity", 1)
                div.text(d.properties.name+ ": " +d.properties.religious10+"%")
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
                // Add functionality that calls functions loadBarchart and loadGauge when province is clicked.
                .on("click", function (d) {
                    console.log("click")
                    removeBarchart();
                    removeGauge();
                    loadBarchart(d.properties.name);
                    loadGauge(d.properties.married10);
                });

    });

};

// Function that loads barchart.
function loadBarchart(provincie){
    
    var margin = {top: 30, right: 180, bottom: 80, left: 180},
        width = 600 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;

    var chart = d3.select("#barchart").append("svg")
        .attr("id", "chart")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.json("kerkelijke_bezoeken.json", function(error, data){

        // Filter year.
        var data = data.filter(function(d){return d.provincie == provincie;});

        // Get every column value
        var elements = Object.keys(data[0])
            .filter(function(d){
                return ((d != "provincie") & (d != "frequentie") & (d != "percentage"));
            });
        
        var selection = elements[0];

        //Make variables for y, x, x axis and y axis.
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

        // Add x axis, y axis and bars to SVG element and add data to the bars.
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
                return d.frequentie + ": " + d[selection];
            });

        // Add dropdown.
        var selector = d3.select("#drop")
            .append("select")
            .attr("id","dropdown")
            .on("change", function(d){
                selection = document.getElementById("dropdown");

                y.domain([0, d3.max(data, function(d){
                    return +d[selection.value];})]);

                yAxis.scale(y);

                d3.selectAll(".rectangle")
                    .transition()
                    .attr("height", function(d){
                        return height - y(+d[selection.value]);
                    })
                    .attr("x", function(d, i){
                        return (width / data.length) * i ;
                    })
                    .attr("y", function(d){
                        return y(+d[selection.value]);
                    })
                    .ease("linear")
                    .select("title")
                    .text(function(d){
                        return d.frequentie + ": " + d[selection.value];
                    });
          
                d3.selectAll("g.y.axis")
                    .transition()
                    .call(yAxis);

             });

        selector.selectAll("option")
          .data(elements)
          .enter().append("option")
          .attr("value", function(d){
            return d;
          })
          .text(function(d){
            return d;
          })

    });

};


// Functions that remove bar chart and gauge.
function removeBarchart() {
    d3.select("#chart").remove();
}

function removeGauge(){
    d3.select("#gauge7").remove();
}


// Function that loads gauge.
function loadGauge(percentage) {
    var gauge1 = load("fillgauge", percentage);

        function NewValue(){
            if(Math.random() > .5){
                return Math.round(Math.random()*100);
                } else {
                    return (Math.random()*100).toFixed(1);
                }
            }
    function load(elementId, value, config) {
        if(config == null) config = settings();

        // Make SVG element for the gauge.
        var gauge = d3.select("#" + elementId).append("svg").attr("id", "gauge7");
        var radius = 80;
        var locX = parseInt(gauge.style("width"))/2 - radius;
        var locY = parseInt(gauge.style("height"))/2 - radius;
        var percentFill = Math.max(config.minimum, Math.min(config.maximum, value))/config.maximum;

        var scalePercHeight;
        if(config.percScaling){
            scalePercHeight = d3.scale.linear()
                .range([0,config.percHeight,0])
                .domain([0,50,100]);
        } else {
            scalePercHeight = d3.scale.linear()
                .range([config.percHeight,config.percHeight])
                .domain([0,100]);
        }

        var pixText = (config.sizeText*radius/2);
        var topValText = parseFloat(value).toFixed(2);
        var startValText = config.countUp?config.minimum:topValText;
        var percText = config.percentSign?"%":"";
        var outerCircle = config.outerCircle * radius;
        var fillGap = config.fillGap * radius;
        var fillMarginCircle = outerCircle + fillGap;
        var fillRadCircle = radius - fillMarginCircle;
        var percHeight = fillRadCircle*scalePercHeight(percentFill*100);

        var lengthWave = fillRadCircle*2/config.count;
        var countClipWave = 1+config.count;
        var clipWidthWave = lengthWave*countClipWave;

        // Rounding functions so that the correct number of decimal places is always displayed as the value counts up.
        var roundText = function(value){ return Math.round(value); };
        if(parseFloat(topValText) != parseFloat(roundText(topValText))){
            roundText = function(value){ return parseFloat(value).toFixed(1); };
        }
        if(parseFloat(topValText) != parseFloat(roundText(topValText))){
            roundText = function(value){ return parseFloat(value).toFixed(2); };
        }

        // Data for building the clip wave area.
        var data = [];
        for(var i = 0; i <= 40*countClipWave; i++){
            data.push({x: i/(40*countClipWave), y: (i/(40))});
        }

        // Scales for drawing the outer circle.
        var xCircle = d3.scale.linear().range([0,2*Math.PI]).domain([0,1]);
        var yCircle = d3.scale.linear().range([0,radius]).domain([0,radius]);

        // Scales for controlling the size of the clipping path.
        var xScale = d3.scale.linear().range([0,clipWidthWave]).domain([0,1]);
        var yScale = d3.scale.linear().range([0,percHeight]).domain([0,1]);

        // Scales for controlling the position of the clipping path.
        var scaleRise = d3.scale.linear()
            // The clipping area size is the height of the fill circle + the wave height, so we position the clip wave
            // such that the it will overlap the fill circle at all when at 0%, and will totally cover the fill
            // circle at 100%.
            .range([(fillMarginCircle+fillRadCircle*2+percHeight),(fillMarginCircle-percHeight)])
            .domain([0,1]);
        var scaleAnimate = d3.scale.linear()
            .range([0, clipWidthWave-fillRadCircle*2]) // Push the clip area one full wave then snap back.
            .domain([0,1]);

        // Scale for controlling the position of the text within the gauge.
        var yScalePosText = d3.scale.linear()
            .range([fillMarginCircle+fillRadCircle*2,(fillMarginCircle+pixText*0.7)])
            .domain([0,1]);

        // Center the gauge within the parent SVG.
        var group = gauge.append("g")
            .attr('transform','translate('+locX+','+locY+')');

        // Draw the outer circle.
        var outerCircleGauge = d3.svg.arc()
            .startAngle(xCircle(0))
            .endAngle(xCircle(1))
            .outerRadius(yCircle(radius))
            .innerRadius(yCircle(radius-outerCircle));
        group.append("path")
            .attr("d", outerCircleGauge)
            .style("fill", config.colour)
            .attr('transform','translate('+radius+','+radius+')');

        // Text where the wave does not overlap.
        var textOne = group.append("text")
            .text(roundText(startValText) + percText)
            .attr("class", "liquidFillGaugeText")
            .attr("text-anchor", "middle")
            .attr("font-size", pixText + "px")
            .style("fill", config.textColour)
            .attr('transform','translate('+radius+','+yScalePosText(config.textPosVert)+')');

        // The clipping wave area.
        var areaClip = d3.svg.area()
            .x(function(d) { return xScale(d.x); } )
            .y0(function(d) { return yScale(Math.sin(Math.PI*2*config.offset*-1 + Math.PI*2*(1-config.count) + d.y*2*Math.PI));} )
            .y1(function(d) { return (fillRadCircle*2 + percHeight); } );
        var groupWave = group.append("defs")
            .append("clipPath")
            .attr("id", "clipWave" + elementId);
        var wave = groupWave.append("path")
            .datum(data)
            .attr("d", areaClip)
            .attr("T", 0);

        // The inner circle with the clipping wave attached.
        var fillGroupCircle = group.append("g")
            .attr("clip-path", "url(#clipWave" + elementId + ")");
        fillGroupCircle.append("circle")
            .attr("cx", radius)
            .attr("cy", radius)
            .attr("r", fillRadCircle)
            .style("fill", config.colour);

        // Text where the wave does overlap.
        var textTwo = fillGroupCircle.append("text")
            .text(roundText(startValText) + percText)
            .attr("class", "liquidFillGaugeText")
            .attr("text-anchor", "middle")
            .attr("font-size", pixText + "px")
            .style("fill", config.wavetextColour)
            .attr('transform','translate('+radius+','+yScalePosText(config.textPosVert)+')');

        // Make the value count up.
        if(config.countUp){
            var tweenText = function(){
                var i = d3.interpolate(this.textContent, topValText);
                return function(t) { this.textContent = roundText(i(t)) + percText; }
            };
            textOne.transition()
                .duration(config.timeRise)
                .tween("text", tweenText);
            textTwo.transition()
                .duration(config.timeRise)
                .tween("text", tweenText);
        }

        // Make the wave rise. wave and groupWave are separate so that horizontal and vertical movement can be controlled independently.
        var XPosWaveGroup = fillMarginCircle+fillRadCircle*2-clipWidthWave;
        if(config.rise){
            groupWave.attr('transform','translate('+XPosWaveGroup+','+scaleRise(0)+')')
                .transition()
                .duration(config.timeRise)
                .attr('transform','translate('+XPosWaveGroup+','+scaleRise(percentFill)+')')
                .each("start", function(){ wave.attr('transform','translate(1,0)'); }); // This transform is necessary to get the clip wave positioned correctly when rise=true and animate=false. The wave will not position correctly without this, but it's not clear why this is actually necessary.
        } else {
            groupWave.attr('transform','translate('+XPosWaveGroup+','+scaleRise(percentFill)+')');
        }

        if(config.animate) animateWave();

        function animateWave() {
            wave.attr('transform','translate('+scaleAnimate(wave.attr('T'))+',0)');
            wave.transition()
                .duration(config.timeAnimate * (1-wave.attr('T')))
                .ease('linear')
                .attr('transform','translate('+scaleAnimate(1)+',0)')
                .attr('T', 1)
                .each('end', function(){
                    wave.attr('T', 0);
                    animateWave(config.timeAnimate);
                });
        }

        function updateGauge(){
            this.update = function(value){
                var newTopValue = parseFloat(value).toFixed(2);
                var roundTextUpdate = function(value){ return Math.round(value); };
                if(parseFloat(newTopValue) != parseFloat(roundTextUpdate(newTopValue))){
                    roundTextUpdate = function(value){ return parseFloat(value).toFixed(1); };
                }
                if(parseFloat(newTopValue) != parseFloat(roundTextUpdate(newTopValue))){
                    roundTextUpdate = function(value){ return parseFloat(value).toFixed(2); };
                }

                var tweenText = function(){
                    var i = d3.interpolate(this.textContent, parseFloat(value).toFixed(2));
                    return function(t) { this.textContent = roundTextUpdate(i(t)) + percText; }
                };

                textOne.transition()
                    .duration(config.timeRise)
                    .tween("text", tweenText);
                textTwo.transition()
                    .duration(config.timeRise)
                    .tween("text", tweenText);

                var percentFill = Math.max(config.minimum, Math.min(config.maximum, value))/config.maximum;
                var percHeight = fillRadCircle*scalePercHeight(percentFill*100);
                var scaleRise = d3.scale.linear()
                    // The clipping area size is the height of the fill circle + the wave height, so we position the clip wave
                    // such that the it will overlap the fill circle at all when at 0%, and will totally cover the fill
                    // circle at 100%.
                    .range([(fillMarginCircle+fillRadCircle*2+percHeight),(fillMarginCircle-percHeight)])
                    .domain([0,1]);
                var newHeight = scaleRise(percentFill);
                var xScale = d3.scale.linear().range([0,clipWidthWave]).domain([0,1]);
                var yScale = d3.scale.linear().range([0,percHeight]).domain([0,1]);
                var newClipArea;
                if(config.percScaling){
                    newClipArea = d3.svg.area()
                        .x(function(d) { return xScale(d.x); } )
                        .y0(function(d) { return yScale(Math.sin(Math.PI*2*config.offset*-1 + Math.PI*2*(1-config.count) + d.y*2*Math.PI));} )
                        .y1(function(d) { return (fillRadCircle*2 + percHeight); } );
                } else {
                    newClipArea = areaClip;
                }

                var newPosWave = config.animate?scaleAnimate(1):0;
                wave.transition()
                    .duration(0)
                    .transition()
                    .duration(config.animate?(config.timeAnimate * (1-wave.attr('T'))):(config.timeRise))
                    .ease('linear')
                    .attr('d', newClipArea)
                    .attr('transform','translate('+newPosWave+',0)')
                    .attr('T','1')
                    .each("end", function(){
                        if(config.animate){
                            wave.attr('transform','translate('+scaleAnimate(0)+',0)');
                            animateWave(config.timeAnimate);
                        }
                    });
                groupWave.transition()
                    .duration(config.timeRise)
                    .attr('transform','translate('+XPosWaveGroup+','+newHeight+')')
            }
        }

        function settings(){
        return {
            minimum: 0, // The gauge minimum value.
            maximum: 100, // The gauge maximum value.
            outerCircle: 0.05, // The outer circle thickness as a percentage of it's radius.
            fillGap: 0.05, // The size of the gap between the outer circle and wave circle as a percentage of the outer circles radius.
            colour: "#21544e", // The color of the outer circle.
            percHeight: 0.05, // The wave height as a percentage of the radius of the wave circle.
            count: 1, // The number of full waves per width of the wave circle.
            timeRise: 1000, // The amount of time in milliseconds for the wave to rise from 0 to it's final height.
            timeAnimate: 18000, // The amount of time in milliseconds for a full wave to enter the wave circle.
            rise: true, // Control if the wave should rise from 0 to it's full height, or start at it's full height.
            percScaling: true, // Controls wave size scaling at low and high fill percentages. When true, wave height reaches it's maximum at 50% fill, and minimum at 0% and 100% fill. This helps to prevent the wave from making the wave circle from appear totally full or empty when near it's minimum or maximum fill.
            animate: true, // Controls if the wave scrolls or is static.
            colour: "#21544e", // The color of the fill wave.
            offset: 0, // The amount to initially offset the wave. 0 = no offset. 1 = offset of one full wave.
            textPosVert: .5, // The height at which to display the percentage text withing the wave circle. 0 = bottom, 1 = top.
            sizeText: 1, // The relative height of the text to display in the wave circle. 1 = 50%
            countUp: true, // If true, the displayed value counts up from 0 to it's final value upon loading. If false, the final value is displayed.
            percentSign: true, // If true, a % symbol is displayed after the value.
            textColour: "#6aa59e", // The color of the value text when the wave does not overlap it.
            wavetextColour: "#a4fcf2" // The color of the value text when the wave overlaps it.
        };
    }

        return new updateGauge();


    }
};


loadMap();