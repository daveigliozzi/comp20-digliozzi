// Your work goes here...

var draw = function(){

var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

sprite = new Image();
sprite.src = "assets/duckhunt.png";
//The tree is first so it will be in the background behind the tall grass
ctx.drawImage(sprite, 0, 271, 83, 122, 270, 250, 166, 244);
//the grass and dirt road
ctx.drawImage(sprite, 0, 720, 800, 180, 0, 420, 800, 180);
//the sniffing dog
ctx.drawImage(sprite, 0, 0, 60, 50, 200, 470, 100, 100);
//birds 1-5
ctx.drawImage(sprite, 0, 115, 35, 32, 100, 100, 35, 32);
ctx.drawImage(sprite, 0, 115, 35, 32, 400, 200, 35, 32);
ctx.drawImage(sprite, 0, 115, 35, 32, 150, 160, 35, 32);
ctx.drawImage(sprite, 0, 115, 35, 32, 700, 190, 35, 32);
ctx.drawImage(sprite, 0, 115, 35, 32, 200, 200, 35, 32);

};