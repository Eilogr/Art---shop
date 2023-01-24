document.querySelectorAll(".productName").forEach(el => el.addEventListener("click", function() {
    document.getElementsByClassName('popup')[0].style= "opacity: 1; visibility: visible;"
}));
document.querySelectorAll(".closeArea").forEach(el => el.addEventListener("click", function() {
    document.getElementsByClassName('popup')[0].style= "opacity: 0; visibility: invisible;"
}));
document.querySelectorAll(".productClose").forEach(el => el.addEventListener("click", function() {
    document.getElementsByClassName('popup')[0].style= "opacity: 0; visibility: invisible;"
}));

document.querySelectorAll(".terms").forEach(el => el.addEventListener("click", function() {
    document.getElementsByClassName('popup')[0].style= "opacity: 1; visibility: visible;"
}));
document.querySelectorAll(".closeArea").forEach(el => el.addEventListener("click", function() {
    document.getElementsByClassName('popup')[0].style= "opacity: 0; visibility: invisible;"
}));
document.querySelectorAll(".productClose").forEach(el => el.addEventListener("click", function() {
    document.getElementsByClassName('popup')[0].style= "opacity: 0; visibility: invisible;"
}));
