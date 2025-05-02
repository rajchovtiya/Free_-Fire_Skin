// This is a simple example of how to use the addEventListener method in JavaScript

let blur = document.getElementById("blur");

function loadAd() {
    let adContainer = document.getElementById("AD_class1");
    adContainer.style.display = "none";
    blur.style.filter = "blur(0px)";
}




// let clike = document.querySelector("window");
// let chak = 0;
// window.addEventListener("click", () => {
//     chak++

//     let localstorage = localStorage.getItem("adclicks");
//     if (localstorage == 3) {
//         let adContainer = document.getElementById("AD_class1");
//         adContainer.style.display = "block";
//         blur.style.filter = "blur(5px)";
//     } else if (localstorage == 4) {
//         chak = 1;

//     }
//     localStorage.setItem("adclicks", chak);

// });
const pageKey = 'index_visits';
let visits = localStorage.getItem(pageKey) || 0;
visits = parseInt(visits) + 1;
localStorage.setItem(pageKey, visits);

if (visits == 3) {
    let adContainer = document.getElementById("AD_class1");
    adContainer.style.display = "block";
    blur.style.filter = "blur(5px)";

} else if (visits == 4) {
    visits = 1
    localStorage.setItem(pageKey, visits);

}