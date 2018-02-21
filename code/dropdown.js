
// function loadDropdown(data1, data2) {

// 	loadGauge(data1)
// 	var data = ["married", "oneparent"]

// 	var select = d3.select('body')
// 	  .append("select")
// 	  	.attr('class','select')
// 	    .on('change', onchange)

// 	var options = select
// 	  .selectAll('option')
// 		.data(data).enter()
// 		.append('option')
// 			.text(function (d) { return d; });

// 	function onchange() {
// 		removeGauge();
// 		removeDropdown();
// 		loadDropdown(data2);
		
// 	};

// }

function loadDropdown(data1, data2) {

	loadGauge(data1)
	var data = [data1, data2]

	var selector = d3.select("#select")
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

