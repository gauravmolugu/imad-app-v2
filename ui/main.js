console.log('Loaded!');

/*var text=document.getElementById('text');
    text.innerHTML="bla bla bla";

//move the image 
var pic=document.getElementById('image');
var marginleft=0;
function moveright(){
    marginleft=marginleft+2;
    pic.style.marginLeft=marginleft+'px';
}
pic.onclick=function(){
    var interval=setInterval(moveright,10);
};*/

var button=document.getElementById('counter');

button.onclick=function(){
 var req=new XMLHttpRequest();
 req.onreadystatechange=function()
 {
     if(req.readyState == XMLHttpRequest.DONE)
     {
         if(req.status == 200)
         {
             var counter=req.responseText;
             var span=document.getElementById('count');
             span.innerHTML=counter.toString();
         }
     }
 };
 
req.open('GET','http://gauravmolugu.imad.hasura-app.io/counter',true);
req.send(null);
};







