
var random256 = function(){
  return Math.round(Math.random() * (255 - 0) + 0);
}

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'white';
ctx.fillRect(0,0,640,360);

var canvasWidth  = canvas.width;
var canvasHeight = canvas.height;

var imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

var myImageData = imageData;

var randomize = function(){
  for (var i = 0; i < myImageData.data.length;){
    myImageData.data[i] = random256();
    myImageData.data[i+1] = random256();
    myImageData.data[i+2] = random256();
    myImageData.data[i+4] = 255;
    i = i + 4;
  }
  ctx.putImageData(myImageData, 0, 0);
}

var interval = setInterval(randomize, 1000);
