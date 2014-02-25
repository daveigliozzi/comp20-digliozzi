// Your work goes here...

var draw = function(){

var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

sprite = new Image();
sprite.src = "assets/duckhunt.png";
ctx.drawImage(sprite, 0, 271, 83, 122, 270, 250, 166, 244);
ctx.drawImage(sprite, 0, 720, 800, 180, 0, 420, 800, 180);
ctx.drawImage(sprite, 0, 0, 60, 50, 200, 470, 100, 100);
};