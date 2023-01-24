/*OPEN PRODUCT*/ 
document.querySelectorAll(".productName").forEach(el => el.addEventListener("click", function() {
    document.getElementsByClassName('popup')[0].style= "opacity: 1; visibility: visible;"
}));
document.querySelectorAll(".closeArea").forEach(el => el.addEventListener("click", function() {
    document.getElementsByClassName('popup')[0].style= "opacity: 0; visibility: invisible;"
}));
document.querySelectorAll(".productClose").forEach(el => el.addEventListener("click", function() {
    document.getElementsByClassName('popup')[0].style= "opacity: 0; visibility: invisible;"
}));

/*OPEN TERMS*/
document.querySelectorAll(".terms").forEach(el => el.addEventListener("click", function() {
    document.getElementById('popTerms').style= "opacity: 1; visibility: visible;"
}));
document.querySelectorAll(".closeArea").forEach(el => el.addEventListener("click", function() {
    document.getElementById('popTerms').style= "opacity: 0; visibility: invisible;"
}));
document.querySelectorAll(".productClose").forEach(el => el.addEventListener("click", function() {
    document.getElementById('popTerms').style= "opacity: 0; visibility: invisible;"
}));

/*OPEN TERMS*/
document.querySelectorAll(".artists").forEach(el => el.addEventListener("click", function() {
    document.getElementById('popArtists').style= "opacity: 1; visibility: visible;"
}));
document.querySelectorAll(".closeArea").forEach(el => el.addEventListener("click", function() {
    document.getElementById('popArtists').style= "opacity: 0; visibility: invisible;"
}));
document.querySelectorAll(".productClose").forEach(el => el.addEventListener("click", function() {
    document.getElementById('popArtists').style= "opacity: 0; visibility: invisible;"
}));

/*OPEN BUSKET*/
document.querySelectorAll(".busket").forEach(el => el.addEventListener("click", function() {
    document.getElementById('popBusket').style= "opacity: 1; visibility: visible;"
}));
document.querySelectorAll(".closeArea").forEach(el => el.addEventListener("click", function() {
    document.getElementById('popBusket').style= "opacity: 0; visibility: invisible;"
}));
document.querySelectorAll(".productClose").forEach(el => el.addEventListener("click", function() {
    document.getElementById('popBusket').style= "opacity: 0; visibility: invisible;"
}));