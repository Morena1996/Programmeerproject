
function loadDropdown(data1, data2) {

	loadGauge(data1)
	var data = ["married", "oneparent"]

	var select = d3.select('body')
	  .append('select')
	  	.attr('class','select')
	    .on('change', onchange)

	var options = select
	  .selectAll('option')
		.data(data).enter()
		.append('option')
			.text(function (d) { return d; });

	function onchange() {
		removeGauge();
		loadDropdown(data2);
		
	};

}
