// This is a simple example of how to use the addEventListener method in JavaScript

let blur = document.getElementById("blur");

function loadAd() {
    let adContainer = document.getElementById("AD_class1");
    adContainer.style.display = "none";
    blur.style.filter = "blur(0px)";

}




const pageKey = 'index_visits';
let visits = localStorage.getItem(pageKey) || 0;
visits = parseInt(visits) + 1;
localStorage.setItem(pageKey, visits);

if (visits % 3 == 0) {
    let adContainer = document.getElementById("AD_class1");
    adContainer.style.display = "block";
    blur.style.filter = "blur(5px)";
} 

