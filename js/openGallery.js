document.querySelectorAll(".productImage").forEach(el => el.addEventListener("click", function() {
    document.getElementById('galleryPosition').style= "display: flex;"
    document.getElementById('galleryBG').style= "display: block;"
}));
document.querySelectorAll(".openBG").forEach(el => el.addEventListener("click", function() {
    document.getElementById('galleryPosition').style= "display: none;"
    document.getElementById('galleryBG').style= "display: none;"
}));