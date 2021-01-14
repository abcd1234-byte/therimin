graf.grafInit('c')
chiptunes.a.resume()
screen_width=graf.width
screen_height=graf.height
x=(screen_width/2)-10
y=(screen_height/2)-10
function draw(){
	graf.clear()
	graf.rect(x,y,10,10,255,255,255)
	document.getElementById("coords").innerHTML="X:"+x+"; "+"Y:"+y+"; "
	//input
	if(Key.isDown(Key.LEFT))
		x--
	if(Key.isDown(Key.RIGHT))
		x++
	if(Key.isDown(Key.UP))
		y--
	if(Key.isDown(Key.DOWN))
		y++
	//wrapping
	if(y<0)
		y=screen_height
	if(y>screen_height)
		y=0
	if(x<0)
		x=screen_width
	if(x>screen_width)
		x=0
	//more input
	if(!Key.isDown(Key.SPACE)){
		chiptunes.note(y,x,10,'sine')
		document.getElementById("muted").innerHTML="Muted:False;"
	}else{
		document.getElementById("muted").innerHTML="Muted:True;"
	}
}
setInterval(draw,10)