 var a;
var b;
var c;
var d;
var e = [1, 2, 3, 4, 5];
var f = [1, 'v', true, false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
    color[color["purple"] = 3] = "purple";
})(color || (color = {}));
;
var backgroundColor = Color.Red;
