//Get Image Object
var img = new Image();
img.crossOrigin = 'anonymous';

//Get Random Image
img.src = 'https://picsum.photos/500/500';

//Get Id Of Canvas
var canvas = document.getElementById('canvas');

//Content of canvas in 2d format
var ctx = canvas.getContext('2d');

//Onload Image 
img.onload = function () {
    ctx.drawImage(img, 0, 0);
    img.style.display = 'none';
};

//Get All IDs
var hoveredColor = document.getElementById('hovered-color');
var selectedColor = document.getElementById('selected-color');


function pick(e, destination) {
    //Now Pic of colors
    var x = e.layerX;
    var y = e.layerY;
    var pixel = ctx.getImageData(x, y, 1, 1);
    var data = pixel.data;


    //RGBA Color Format
    const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;

    //Now Set Destination 
    destination.style.background = rgba;
    destination.textContent = rgba;

    return rgba;
}


//Now On Mousemove
canvas.addEventListener('mousemove', function (e) {
    pick(e, hoveredColor);
});

canvas.addEventListener('click', function (e) {
    pick(e, selectedColor);
});

