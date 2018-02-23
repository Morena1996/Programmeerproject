
function removeBarchart() {
    d3.select("#chart").remove();
}

function removeGauge() {
    d3.select("#gauge7").remove();
}

function removeMap() { 
	d3.select("#svgMap").remove();
}

function removeDropdown() {
	d3.select("#drop").remove();
}

function removeTitle(id) {
	d3.select(id).remove();
}
