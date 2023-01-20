document.querySelectorAll("#magazine").forEach(el => el.addEventListener("click", function() {
    document.getElementsByClassName('magazine')[0].style= "display: flex;"
    document.getElementsByClassName('gallery')[0].style= "display: none;"
    document.getElementsByClassName('marketplace')[0].style= "display: none;"
    document.getElementById('magazine').style= "color: #b19124;"
    document.getElementById('gallery').style= "color: black;"
    document.getElementById('marketplace').style= "color: black;"
}));
document.querySelectorAll("#gallery").forEach(el => el.addEventListener("click", function() {
    document.getElementsByClassName('magazine')[0].style= "display: none;"
    document.getElementsByClassName('gallery')[0].style= "display: flex;"
    document.getElementsByClassName('marketplace')[0].style= "display: none;"
    document.getElementById('magazine').style= "color: black;"
    document.getElementById('gallery').style= "color: #b19124;"
    document.getElementById('marketplace').style= "color: black;"
}));
document.querySelectorAll("#marketplace").forEach(el => el.addEventListener("click", function() {
    document.getElementsByClassName('magazine')[0].style= "display: none;"
    document.getElementsByClassName('gallery')[0].style= "display: none;"
    document.getElementsByClassName('marketplace')[0].style= "display: flex;"
    document.getElementById('magazine').style= "color: black;"
    document.getElementById('gallery').style= "color: black;"
    document.getElementById('marketplace').style= "color: #b19124;"
}));