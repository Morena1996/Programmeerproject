    var svg = d3.select("#vis").append("svg").attr("width", 200).attr("height", 100),
        checkBox1 = new d3CheckBox(),
        checkBox2 = new d3CheckBox();

    var txt = svg.append("text").attr("x", 40).attr("y", 40).text("2010"),
        txt2 = svg.append("text").attr("x", 140).attr("y", 40).text("2015");

    // binary = function() {
    //     checkBox1.checked = false;
    // }

    //Just for demonstration
    update1 = function () {
        removeCheckbox(checkBox2);
        return checkBox2;
    };

    update2 = function () {
        // checkOut(checkBox1);
        removeMap();
        showMap("nld15.json");
    };



    //function checkOut(checkBox) {
    //     checkBox.checked = !checkBox.checked;
    //     // checkBox.mark.style("opacity", (checkBox.checked)? 1 : 0);
    //     return checkBox;
    // }



    //Setting up each check box
    checkBox1.size(30).x(2).y(20).rx(5).ry(5).markStrokeWidth(3).boxStrokeWidth(4).checked(true).clickEvent(update1);
    checkBox2.size(30).x(100).y(20).rx(5).ry(5).markStrokeWidth(3).boxStrokeWidth(4).checked(false).clickEvent(update2);


    svg.call(checkBox1);
    svg.call(checkBox2);

    