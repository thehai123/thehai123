let introblock1 = document.getElementById("intro-block1")
let introblock2= document.getElementById("intro-block2")
let introblock3 = document.getElementById("intro-block3")

let introdes1 = document.getElementById("intro-des1")
let introdes2 = document.getElementById("intro-des2")
let introdes3 = document.getElementById("intro-des3")

introblock1.addEventListener("mouseenter", function(){
    introblock1.style.backgroundColor = "white";  
    introblock1.style.color = "black";
    introdes1.style.display = "block";
})

introblock2.addEventListener("mouseenter", function(){
    introblock2.style.backgroundColor = "white";  
    introblock2.style.color = "black";
    introdes2.style.display = "block";
})

introblock3.addEventListener("mouseenter", function(){
    introblock3.style.backgroundColor = "white";  
    introblock3.style.color = "black";
    introdes3.style.display = "block";
})

introblock1.addEventListener("mouseleave", function(){
    introblock1.style.backgroundColor = ""
    introblock1.style.color = "white";
    introdes1.style.display = "none";
})
introblock2.addEventListener("mouseleave", function(){
    introblock2.style.backgroundColor = ""
    introblock2.style.color = "white";
    introdes2.style.display = "none";
})
introblock3.addEventListener("mouseleave", function(){
    introblock3.style.backgroundColor = ""
    introblock3.style.color = "white";
    introdes3.style.display = "none";
})

