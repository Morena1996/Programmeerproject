// Function that loads gauge.


/*
Programmeerproject
Name: Morena Bastiaansen
Student number: 10725792

gauge.js
File with JavaScript code for gauge on religion in the Netherlands
*/

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