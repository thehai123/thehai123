let control1 = document.getElementById("control1"); 
let control2 = document.getElementById("control2");
let control3 = document.getElementById("control3"); 
let control4 = document.getElementById("control4"); 
let control5 = document.getElementById("control5"); 
let control6 = document.getElementById("control6"); 

control1.addEventListener("mouseenter", function(){
    control1.style.width = "110px";
    control1.style.height = "110px";
})
 
control2.addEventListener("mouseenter", function(){
    control2.style.width = "110px";
    control2.style.height = "110px";
})

control3.addEventListener("mouseenter", function(){
    control3.style.width = "110px";
    control3.style.height = "110px";
})

control4.addEventListener("mouseenter", function(){
    control4.style.width = "110px";
    control4.style.height = "110px";
})

control5.addEventListener("mouseenter", function(){
    control5.style.width = "110px";
    control5.style.height = "110px";
})

control6.addEventListener("mouseenter", function(){
    control6.style.width = "110px";
    control6.style.height = "110px";
})

 
control1.addEventListener("mouseleave", function(){
    control1.style.width = "100px";
    control1.style.height = "100px";
})

control2.addEventListener("mouseleave", function(){
    control2.style.width = "100px";
    control2.style.height = "100px";
})
 
control3.addEventListener("mouseleave", function(){
    control3.style.width = "100px";
    control3.style.height = "100px";
})

control4.addEventListener("mouseleave", function(){
    control4.style.width = "100px";
    control4.style.height = "100px";
})
 
control5.addEventListener("mouseleave", function(){
    control5.style.width = "100px";
    control5.style.height = "100px";
})

control6.addEventListener("mouseleave", function(){
    control6.style.width = "100px";
    control6.style.height = "100px";
})

let c = document.getElementById("draw");
let ctx = c.getContext("2d");
ctx.fillStyle = "red";

function drawm(x,y){
let circle = new Path2D()
circle.arc(x,y,10,0,2*Math.PI)
ctx.fill(circle);
}
// let canvas = document.getElementById("canvas")
  canvas.addEventListener("mousedown",function(){
          
          clientx ;
          clienty ;

      let react = canvas.getBoundingClintRect();
      draw(clientx - react.feft,clienty - react.top)
  })



