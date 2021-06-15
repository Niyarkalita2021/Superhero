var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
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
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
	console.log("p and shift pressed together");
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}
if(e.shiftKey && keyPressed == '77')
{
	console.log("m and shift pressed together");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;
}

	if(keyPressed == '70')
	{
		new_image('http://assets.stickpng.com/images/580b57fbd9996e24bc43c051.png'); 
		console.log("f");
	}
	if(keyPressed == '66')
	{
		new_image('https://lh3.googleusercontent.com/proxy/SmCtn-XOEtuhwO228EjGV8Xy3p-GRVwITSPwJR0iXaMqZ72wfnRma7lXySW5kVqyy1McSnv2he6TLFpbU3qPUwQX-IAAh3N6QJKltHaGRgH_-lWtMuIGKQqVj7XFL76FMNMIsOPWVPeJ9SqEJg'); 
		console.log("b");
	}
	if(keyPressed == '82')
	{
		new_image('https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/25/Mjolnir.png/revision/latest?cb=20140129001244'); 
		console.log("r");
	}
	if(keyPressed == '72')
	{
		new_image('https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/36/Captain_America_Shield.png/revision/latest?cb=20190316204818'); 
		console.log("h");
	}


	if(keyPressed == '38')
	{
		up();
		console.log("up");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("down");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("left");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("right");
	}
	
}
