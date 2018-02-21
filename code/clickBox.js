
function checkBox11(){
    d3.select("#checkBox1").remove();
    var svg = d3.select("#vis").append("svg").attr("width", 200).attr("height", 100),
        checkBox1 = new d3CheckBox(),
        checkBox2 = new d3CheckBox(),
        txt = svg.append("text").attr("x", 40).attr("y", 40).text("2010"),
        txt2 = svg.append("text").attr("x", 140).attr("y", 40).text("2015");

    //Setting up each check box
    checkBox1.size(30).x(2).y(20).rx(5).ry(5).markStrokeWidth(3).boxStrokeWidth(4).checked(true).clickEvent(checkBox11);
    checkBox2.size(30).x(100).y(20).rx(5).ry(5).markStrokeWidth(3).boxStrokeWidth(4).checked(false).clickEvent(checkBox22);

    svg.attr("id", "checkBox1").call(checkBox1);
    svg.call(checkBox2);

    d3.select("#mainGroup").remove();
    removeBarchart();
    removeGauge();
    loadMap("nld10-2.json");
}


function checkBox22(){

    d3.select("#checkBox1").remove();
    var svg = d3.select("#vis").append("svg").attr("width", 200).attr("height", 100),
        checkBox1 = new d3CheckBox(),
        checkBox2 = new d3CheckBox(),
        txt = svg.append("text").attr("x", 40).attr("y", 40).text("2010"),
        txt2 = svg.append("text").attr("x", 140).attr("y", 40).text("2015");

    checkBox1.size(30).x(2).y(20).rx(5).ry(5).markStrokeWidth(30).boxStrokeWidth(4).checked(false).clickEvent(checkBox11);
    checkBox2.size(30).x(100).y(20).rx(5).ry(5).markStrokeWidth(3).boxStrokeWidth(4).checked(true).clickEvent(checkBox22);


    svg.attr("id", "checkBox1").call(checkBox1);
    svg.call(checkBox2);

    d3.select("#mainGroup").remove();
    removeBarchart();
    removeGauge();
    loadMap("nld15.json");
};