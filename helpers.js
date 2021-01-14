var chiptunes={}
chiptunes.noteValues = {
    'C0': 16.35,
    'C#0': 17.32,
    'Db0': 17.32,
    'D0': 18.35,
    'D#0': 19.45,
    'Eb0': 19.45,
    'E0': 20.60,
    'F0': 21.83,
    'F#0': 23.12,
    'Gb0': 23.12,
    'G0': 24.50,
    'G#0': 25.96,
    'Ab0': 25.96,
    'A0': 27.50,
    'A#0': 29.14,
    'Bb0': 29.14,
    'B0': 30.87,
    'C1': 32.70,
    'C#1': 34.65,
    'Db1': 34.65,
    'D1': 36.71,
    'D#1': 38.89,
    'Eb1': 38.89,
    'E1': 41.20,
    'F1': 43.65,
    'F#1': 46.25,
    'Gb1': 46.25,
    'G1': 49.00,
    'G#1': 51.91,
    'Ab1': 51.91,
    'A1': 55.00,
    'A#1': 58.27,
    'Bb1': 58.27,
    'B1': 61.74,
    'C2': 65.41,
    'C#2': 69.30,
    'Db2': 69.30,
    'D2': 73.42,
    'D#2': 77.78,
    'Eb2': 77.78,
    'E2': 82.41,
    'F2': 87.31,
    'F#2': 92.50,
    'Gb2': 92.50,
    'G2': 98.00,
    'G#2': 103.83,
    'Ab2': 103.83,
    'A2': 110.00,
    'A#2': 116.54,
    'Bb2': 116.54,
    'B2': 123.47,
    'C3': 130.81,
    'C#3': 138.59,
    'Db3': 138.59,
    'D3': 146.83,
    'D#3': 155.56,
    'Eb3': 155.56,
    'E3': 164.81,
    'F3': 174.61,
    'F#3': 185.00,
    'Gb3': 185.00,
    'G3': 196.00,
    'G#3': 207.65,
    'Ab3': 207.65,
    'A3': 220.00,
    'A#3': 233.08,
    'Bb3': 233.08,
    'B3': 246.94,
    'C4': 261.63,
    'C#4': 277.18,
    'Db4': 277.18,
    'D4': 293.66,
    'D#4': 311.13,
    'Eb4': 311.13,
    'E4': 329.63,
    'F4': 349.23,
    'F#4': 369.99,
    'Gb4': 369.99,
    'G4': 392.00,
    'G#4': 415.30,
    'Ab4': 415.30,
    'A4': 440.00,
    'A#4': 466.16,
    'Bb4': 466.16,
    'B4': 493.88,
    'C5': 523.25,
    'C#5': 554.37,
    'Db5': 554.37,
    'D5': 587.33,
    'D#5': 622.25,
    'Eb5': 622.25,
    'E5': 659.26,
    'F5': 698.46,
    'F#5': 739.99,
    'Gb5': 739.99,
    'G5': 783.99,
    'G#5': 830.61,
    'Ab5': 830.61,
    'A5': 880.00,
    'A#5': 932.33,
    'Bb5': 932.33,
    'B5': 987.77,
    'C6': 1046.50,
    'C#6': 1108.73,
    'Db6': 1108.73,
    'D6': 1174.66,
    'D#6': 1244.51,
    'Eb6': 1244.51,
    'E6': 1318.51,
    'F6': 1396.91,
    'F#6': 1479.98,
    'Gb6': 1479.98,
    'G6': 1567.98,
    'G#6': 1661.22,
    'Ab6': 1661.22,
    'A6': 1760.00,
    'A#6': 1864.66,
    'Bb6': 1864.66,
    'B6': 1975.53,
    'C7': 2093.00,
    'C#7': 2217.46,
    'Db7': 2217.46,
    'D7': 2349.32,
    'D#7': 2489.02,
    'Eb7': 2489.02,
    'E7': 2637.02,
    'F7': 2793.83,
    'F#7': 2959.96,
    'Gb7': 2959.96,
    'G7': 3135.96,
    'G#7': 3322.44,
    'Ab7': 3322.44,
    'A7': 3520.00,
    'A#7': 3729.31,
    'Bb7': 3729.31,
    'B7': 3951.07,
    'C8': 4186.01
};
chiptunes.noteDurations={
	'DOUBLE_NOTE':2,
	'WHOLE_NOTE':1,
	'HALF_NOTE':0.5,
	'QUARTER_NOTE':0.25,
	'EIGHTH_NOTE':0.125,
	'SIXTEENTH_NOTES':0.625
}
chiptunes.a=new AudioContext()
chiptunes.note=function(vol, freq, duration, waveform="sine"){
  v=chiptunes.a.createOscillator()
  u=chiptunes.a.createGain()
  v.connect(u)
  v.frequency.value=freq
  v.type=waveform
  u.connect(chiptunes.a.destination)
  u.gain.value=vol*0.01
  v.start(chiptunes.a.currentTime)
  v.stop(chiptunes.a.currentTime+duration*0.001)
}
chiptunes.playArpeggio=function(vol,freqs,duration,interval_between,type="square"){
	with(chiptunes){
		for(i=0;i<freqs.length;i++){
			note(vol,freqs[i],duration,type);
			rest(interval_between)
		}
	}
}
chiptunes.rest=function(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
var graf={}
graf.grafInit=function(id){
	this.width=document.getElementById(id).width
	this.height=document.getElementById(id).height
	this.drawing_context=document.getElementById(id).getContext('2d')
}
graf.putPixel=function(x,y,r,g,b,a=255){
	this.drawing_context.fillColor="rgb("+","+r+','+g+","+b+","+a+")"
	this.drawing_context.fillRect(x,y,1,1)
}
graf.line=function(x0, y0, x1, y1,r,g,b,a=255) {
   var dx = Math.abs(x1 - x0);
   var dy = Math.abs(y1 - y0);
   var sx = (x0 < x1) ? 1 : -1;
   var sy = (y0 < y1) ? 1 : -1;
   var err = dx - dy;

   while(true) {
      this.putPixel(x0, y0,r,g,b,a); // Do what you need to for this

      if ((x0 === x1) && (y0 === y1)) break;
      var e2 = 2*err;
      if (e2 > -dy) { err -= dy; x0  += sx; }
      if (e2 < dx) { err += dx; y0  += sy; }
   }
}
graf.rect=function(x,y,w,h,r,g,b,a=255){
	this.drawing_context.fillColor="rgb("+","+r+','+g+","+b+","+a+")"
	this.drawing_context.fillRect(x,y,w,h)
}
graf.hollowRect=function(x,y,w,h,r,g,b,a=255){
	this.line(x,y,x+w,y,r,g,b,a)
	this.line(x,y,x,y+h,r,g,b,a)
	this.line(x+w,y,x+w,y+h,r,g,b,a)
	this.line(x,y+h,x+w,y+h,r,g,b,a)
}
graf.drawImg=function(x,y,src){
	i=new Image()
	i.src=src
	this.drawing_context.drawImage(i,x,y)
}
graf.drawImg2=function(x,y,w,h,src){
	i=new Image()
	i.src=src
	this.drawing_context.drawImage(i,x,y,w,h)
}
graf.clear=function(){
	this.drawing_context.clearRect(0,0,this.width,this.height);
}
graf.drawString=function(x,y,s,r,g,b,a=255){
	this.drawing_context.fillColor="rgb("+","+r+','+g+","+b+","+a+")"
	graf.drawing_context.fillText(x,y,s)
}
var Key = {
  _pressed: {},
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
	W: 87,
	A: 65,
	S: 83,
	D: 68,
	SPACE: 32,
	F: 70,
  isDown: function(keyCode) {
    return this._pressed[keyCode];
  },
  onKeydown: function(event) {
    this._pressed[event.keyCode] = true;
  },
  onKeyup: function(event) {
    delete this._pressed[event.keyCode];
  }
};
window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);
//JSGHT 2D Collision Component
collisHelper={};
collisHelper.detectRectCollision= function(rect1,rect2){
if (rect1.x < rect2.x + rect2.width &&
rect1.x + rect1.width > rect2.x &&
rect1.y < rect2.y + rect2.height &&
rect1.y + rect1.height > rect2.y) {
return true;
}else{
return false;
};
};
collisHelper.detectCircleCollision=function(circle1,circle2){
var dx = circle1.x - circle2.x;
var dy = circle1.y - circle2.y;
var distance = Math.sqrt(dx * dx + dy * dy);
if (distance < circle1.radius + circle2.radius) {
return true;
}else{
return false;
};
};
collisHelper.detectRectCircleCollision=function(circle,rect){
var distX = Math.abs(circle.x - rect.x-rect.width/2);
var distY = Math.abs(circle.y - rect.y-rect.height/2);
if (distX > (rect.width/2 + circle.radius)) { return false; }
if (distY > (rect.height/2 + circle.radius)) { return false; }
if (distX <= (rect.width/2)) { return true; }
if (distY <= (rect.height/2)) { return true; }
var dx=distX-rect.width/2;
var dy=distY-rect.height/2;
return (dx*dx+dy*dy<=(circle.radius*circle.radius));
}
