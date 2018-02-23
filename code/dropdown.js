/*
Programmeerproject: "Ontkerkelijking in Nederland"
Name: Morena Bastiaansen
Student number: 10725792

dropdown.js
File with JavaScript code for dropdown for data visualization on religion in the Netherlands
*/


// Function that loads the drop down.
function loadDropdown(data1, data2, option_1, option_2) {

	// Create HTML elements for the drop down.
	var select = document.createElement("select");
    select.id = "drop";

    var option1 = document.createElement("option");
    option1.setAttribute("selected", "selected");
    option1.setAttribute("value", option_1);
    var text1 = document.createTextNode(option_1);
    option1.appendChild(text1);

    var option2 = document.createElement("option");
    option2.setAttribute("value", option_2);
    var text2 = document.createTextNode(option_2);
    option2.appendChild(text2);

    select.appendChild(option1);
    select.appendChild(option2);
    var element = document.getElementById("gauge");
    element.appendChild(select);   
	
	// Map the data to the options.
	var data = [data1, data2]
	
	var selector = d3.select("#drop")
	    .on("change", onchange)

	var options = selector
	  	.selectAll("option")
		.data(data).enter()

	// Function that changes the drop down and the gauge when dropdown is clicked.
	function onchange() {
		removeGauge();
		removeDropdown();
		loadDropdown(data2, data1, option_2, option_1);
	};

	// Load the gauge.
	loadGauge(data1)
}

