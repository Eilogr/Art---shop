document.querySelectorAll(".productName").forEach(el => el.addEventListener("click", function() {
    document.getElementsByClassName('openPosition')[0].style= "display: block;"
    document.getElementsByClassName('openBG')[0].style= "display: block;"
}));
document.querySelectorAll(".openBG").forEach(el => el.addEventListener("click", function() {
    document.getElementsByClassName('openPosition')[0].style= "display: none;"
    document.getElementsByClassName('openBG')[0].style= "display: none;"
}));