let pepar = document.querySelector("#Wallpaper");

const deta = async () => {
    const fechdata = await fetch("data.json");
    const jsondeta = await fechdata.json();

    // Shuffle and pick first 39
    const shuffled = jsondeta.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 39);

    selected.forEach(e => {
        const img = document.createElement("img");
        img.src = e.img;
        img.alt = "Wallpaper";
        img.onclick = () => openModal(e.img);
        pepar.appendChild(img);
    });
};

deta();

// Modal logic
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const downloadBtn = document.getElementById("downloadBtn");

function openModal(src) {
    modal.style.display = "flex";
    modalImg.src = src;
    downloadBtn.href = src;
}

function closeModal() {
    modal.style.display = "none";
}

// Optional: close modal on background click
modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});