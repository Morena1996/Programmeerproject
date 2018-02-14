/*
Programmeerproject
Name: Morena Bastiaansen
Student number: 10725792

main.js
File with JavaScript code for data visualization on religion in the Netherlands
*/

function showMap10() {
    loadMap("nld10.json");
};

function showMap15() {
    loadMap("nld15.json");
}

    //Setting up each check box
    checkBox1.size(30).x(2).y(20).rx(5).ry(5).markStrokeWidth(3).boxStrokeWidth(4).checked(false).clickEvent(showMap10);
    checkBox2.size(30).x(100).y(20).rx(5).ry(5).markStrokeWidth(3).boxStrokeWidth(4).checked(false).clickEvent(showMap15);


    svg.call(checkBox1);
    svg.call(checkBox2);


