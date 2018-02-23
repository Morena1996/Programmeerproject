/*
Programmeerproject: "Ontkerkelijking in Nederland"
Name: Morena Bastiaansen
Student number: 10725792

checkbox.js
File with JavaScript code for checkboxes for data visualization on religion in the Netherlands.
*/


// Function to load the check boxes
function loadCheckBox(){

    // Remove the last check boxes
    d3.select("#checkBoxes").remove();

    // Create SVG element for new check boxes
    var svgCheckBox = d3.select("#checkBox").append("svg").attr("width", 200).attr("height", 100)

    // Create new check boxes
    var checkBox1 = new d3CheckBox();
    var checkBox2 = new d3CheckBox();
    var option1 = svgCheckBox.append("text")
        .attr("x", 40)
        .attr("y", 40)
        .text("2010");
    var option2 = svgCheckBox
        .append("text")
        .attr("x", 140)
            .attr("y", 40).text("2015");

    // Set up each check box
    checkBox1.size(30).x(2).y(20).rx(5).ry(5).markStrokeWidth(3).boxStrokeWidth(4).checked(true).clickEvent(loadCheckBox);
    checkBox2.size(30).x(100).y(20).rx(5).ry(5).markStrokeWidth(3).boxStrokeWidth(4).checked(false).clickEvent(switchCheckBox);

    // Attribute id to SVG element for the removeCheckBox function.
    svgCheckBox.attr("id", "checkBoxes")
        .call(checkBox1)
        .call(checkBox2);

    // Remove the last map, gauge and chart and load the selected ones.
    removeBarchart();
    removeGauge();
    removeMap();
    removeDropdown();
    removeTitle("#gaugeTitle1");
    removeTitle("#gaugeTitle2");
    loadMap("nld10.json");
}

// Function that switches the marked check box
function switchCheckBox(){

    // Remove the last check boxes
    d3.select("#checkBoxes").remove();


    var svgCheckBox = d3.select("#checkBox")
        .append("svg")
        .attr("width", 200)
        .attr("height", 100);

    var checkBox1 = new d3CheckBox();
    
    var checkBox2 = new d3CheckBox();
    
    var txt = svgCheckBox.append("text")
        .attr("x", 40)
        .attr("y", 40)
        .text("2010");
    
    var txt2 = svgCheckBox.append("text")
        .attr("x", 140)
        .attr("y", 40)
        .text("2015");

    // Set up each check box.
    checkBox1.size(30).x(2).y(20).rx(5).ry(5).markStrokeWidth(30).boxStrokeWidth(4).checked(false).clickEvent(loadCheckBox);
    checkBox2.size(30).x(100).y(20).rx(5).ry(5).markStrokeWidth(3).boxStrokeWidth(4).checked(true).clickEvent(switchCheckBox);

    // Attribute id to SVG element for the check boxes.
    svgCheckBox.attr("id", "checkBoxes").call(checkBox1).call(checkBox2);

    // Remove the last map, gauge and chart and load the selected ones.
    removeBarchart();
    removeMap();
    removeGauge();
    removeTitle("#gaugeTitle1");
    removeTitle("#gaugeTitle2");
    removeDropdown();
    loadMap("nld15.json");
};