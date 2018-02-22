

function loadDropdown(data1, data2) {

	loadGauge(data1)
	var data = [data1, data2]

	var selector = d3.select("#drop")
	  	.attr("class","select")
	    .on("change", onchange)

	var options = selector
	  	.selectAll('option')
		.data(data).enter()

	function onchange() {
		removeGauge();
		loadDropdown(data2, data1);
		
	};

}

