
document.getElementById("home").addEventListener("click",toggleDisplay)
document.getElementById("about").addEventListener("click",toggleDisplay)
document.getElementById("portfolio").addEventListener("click",toggleDisplay)
document.getElementById("contact").addEventListener("click",toggleDisplay)
document.getElementById("resume").addEventListener("click",openPDF)

function toggleDisplay(event){
    document.querySelectorAll(".tab").forEach((tab) => {
        tab.style.display = "none"
        if(tab.classList.contains(event.target.id) === true){
            tab.style.display = "block"
        }
    })
}

// slideshow
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("lights");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

function openPDF(){
        window.open("img/Maritza Ledezma Resume 2022 (1).pdf")
}



