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
// let adContainer = document.querySelector("#AD_class1 span").addEventListener("click", () => {
//     chak - 1
//     localStorage.setItem("adclicks", chak);

// })
let i = 1;
let main = document.querySelector(".main")
main.addEventListener("click", () => {
    let localstorage = localStorage.setItem("adclicks", i);
    i++;
})