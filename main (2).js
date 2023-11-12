
var canvas = new fabric.Canvas('ok');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("Quackitycubito.png", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height(l));
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}
window.addEventListener("keydown", Quackity);
function Quackity(e) {
l=e.keyCode;
console.log(l);
if(e.shiftKey==true&&l=="81") {
console.log("shift+Q");
block_image_width=block_image_width+13;
block_image_height=block_image_height+13;
document.getElementById("current_width").innerHTML=block_image_width;
document.getElementById("current_height").innerHTML=block_image_height;
}
if(e.shiftKey==true&&l=="65") {
	console.log("shift+A");
	block_image_width=block_image_width+13;
	block_image_height=block_image_height+13;
	document.getElementById("current_width").innerHTML=block_image_width;
	document.getElementById("current_height").innerHTML=block_image_height;
	}
	if(l=="38") {
		up();
		console.log("up");
	}
	if(l=="40") {
		down();
		console.log("down");
	}
	if(l=="37") {
		left();
		console.log("left");
	}
	if(l=="39") {
		right();
		console.log("right");
	}
	if(l=="68") {
		new_image("Bloquedediamante.webp");
		console.log("d")
	}
	if(l=="82") {
		new_image("cloud.jpg");
	    console.log("r")
	}
	if(l=="65") {
		new_image("dark_green.png");
		console.log("a")
	}
	if(l=="69") {
		new_image("ground.png");
		console.log("e")
	}
	if(l=="83") {
		new_image("light_green.png");
		console.log("s")
	}
	if(l=="87") {
		new_image("roof.jpg");
		console.log("w")
	}
	if(l=="71") {
		new_image("trunk.jpg");
		console.log("g")
	}
	if(l=="76") {
		new_image("unique.png");
		console.log("l")
	}
	if(l=="192") {
		new_image("wall.jpg");
		console.log("ñ")
	}
	if(l=="88") {
		new_image("yellow_wall.png");
		console.log("x")
	}
}
function down()
{
	if(player_y <=500)
	{
		player_y = player_y + block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia abajo, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
function up()
{
	if(player_y >=0)
	{
		player_y = player_y - block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia arriba, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
function right()
{
	if(player_x <=850)
	{
		player_x = player_x + block_image_width;
		console.log("altura del bloque = " + block_image_width);
		console.log("Cuando se presiona la flecha hacia la derecha, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
function left()
{
	if(player_x >=0)
	{
		player_x = player_x - block_image_width;
		console.log("altura del bloque = " + block_image_width);
		console.log("Cuando se presiona la flecha hacia la izquierda, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}