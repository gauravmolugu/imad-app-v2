console.log('Loaded!');

var text=document.getElementById('text');
    text.innerHTML="bla bla bla";

//move the image 
var pic=document.getElementById('image');
var marginleft=0;
function moveright(){
    marginleft=marginleft+2;
    pic.style.marginleft=marginleft+'px';
}
pic.onclick=function(){
    var interval=setInterval(moveright,50);
};