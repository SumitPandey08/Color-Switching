// adding button tag using Dom
let button = document.querySelectorAll(".btn")
//body tag
let body = document.querySelector("body")
// creating loop on button
let style = button.forEach((btn) => {
   console.log(btn) ;
   // adding event listner 
   btn.addEventListener("click" , function(ven) {
   console.log(btn.id)
   // conditional statement to change the color
   if(btn.id == "red"){
    body.style.backgroundColor = "red" ;
    body.style.color = "white" ;
    
   }
   else if(btn.id == "yellow"){
    body.style.backgroundColor = "yellow" ;
    body.style.color = "black" ;
    
   }
   else if(btn.id == "black"){
    body.style.backgroundColor = "black" ;
    body.style.color = "white" ;
    
   }
   else if(btn.id == "blue"){
    body.style.backgroundColor = "blue" ;
    body.style.color = "white" ;
    
   }
   } )
})
