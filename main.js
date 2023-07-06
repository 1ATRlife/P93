var canvas = new fabric.Canvas('myCanvas');


block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 480;
color=[];
m=0;
c=0;


var block_image_object= "";
function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img){
block_image_object=Img;
block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_height);
block_image_object.set({top:block_y,left:block_x});
canvas.add(block_image_object);
	})
}
function clear(){
	canvas = new fabric.Canvas('myCanvas')
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
	if(keyPressed==8){
		if (color[c]=="Red"){
			block_x=10;
			block_image_height=560;
			block_image_width=460;
		} else if (color[c]=="Green"){
			block_x=310;
			block_image_height=480;
			block_image_width=370;
		} else if (color[c]=="Yellow"){
			block_x=560;
			block_image_height=570;
			block_image_width=470;
		} else if (color[c]=="Pink"){
			block_x=880;
			block_image_height=500;
			block_image_width=500;
		} else if (color[c]=="Blue"){
			block_x=1150;
			block_image_height=800;
			block_image_width=800;
		}
		new_image("1668873.jpg")
		console.log("clear")
		c+=2;
		color.unshift("")
		console.log(color)
		console.log(c)
	}

	if(keyPressed == 82) 
	{ if(color[m] != "Red"){
		block_image_width = 350;
		block_image_height = 480;
		block_x=10;
		new_image('red.jpg')
		console.log("Red")
		color.unshift("Red")
		c=0;
	}
	}
	// Use appropriate keycode to add green image
	if(keyPressed == 71)
	{if(color[m] != "Green"){
		block_image_width = 350;
		block_image_height = 480;
		block_x=315;
		new_image('green.png')
		console.log("Green")
		color.unshift("Green")
		c=0;
	}
	}
	// Use appropriate keycode to add yellow image
	if(keyPressed == 89)
	{if(color[m] != "Yellow"){
		block_image_width = 350;
		block_image_height = 480;
		block_x=560;
		new_image('yellow.png')
		console.log("Yellow")
		color.unshift("Yellow")
		c=0;
	}
	}
	// Use appropriate keycode to add pink image
	if(keyPressed == 80)
	{if(color[m] != "Pink"){
		block_image_width = 350;
		block_image_height = 480;
		block_x=880;
		new_image('pink.png')
		console.log("Pink")
		color.unshift("Pink")
		c=0;
	}
	}
	// Use appropriate keycode to add blue image
	if(keyPressed == 66)
	{if(color[m] != "Blue"){
		block_image_width = 350;
		block_image_height = 480;
		block_x=1040;
		new_image('blue.png')
		console.log("Blue")
		color.unshift("Blue")
		c=0;
	}
	}
}
	


