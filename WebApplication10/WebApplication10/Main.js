var canvas = document.getElementById('canvas');
var Context = canvas.getContext('2d');

var gameWidth = canvas.width;
var gameHeight = canvas.height;



var background = new Image();
background.onload = function () {
    Context.drawImage(background, 0, 0);
};
background.src = "background.jpg";

var car = new Image();
car.onload = function () {
    Context.drawImage(car, 4, 400);
};
car.src = "car2.png";