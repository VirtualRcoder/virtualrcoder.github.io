var h = document.querySelector("h1");
var isorange = false;

setInterval(function(){
 if(isorange) {
    h1.style.color = 'blue';
 }
 else{
    h1.style.color = 'orange';
 }
 isorange = !isorange ; 
},1000);
