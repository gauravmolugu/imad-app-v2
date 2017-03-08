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
var c=0;
button.onclick=function(){
 var req=new XMLhttpRequest();
 req.onreadystatechange=function()
 {
     if(req.readyState===XMLhttpRequest.DONE)
     {
         if(req.status===100)
         {
             var counter=req.responseText;
             var span=document.getElementById('count');
             span.innerHTML=counter.toString();
         }
     }
 };
 
request.open('GET','http://gauravmolugu.imad.hasura-app.io/counter',true);
request.send(null);
};







