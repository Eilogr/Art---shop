document.querySelectorAll("#option2").forEach(el => el.addEventListener("click", function() {
    document.getElementsByClassName('deliveryContext')[0].style= "display: none;"
}));
document.querySelectorAll("#option1").forEach(el => el.addEventListener("click", function() {
    document.getElementsByClassName('deliveryContext')[0].style= "display: flex;"
}));