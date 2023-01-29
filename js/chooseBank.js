// document.querySelectorAll("#bank1").forEach(el => el.addEventListener("click", function() {
//     document.getElementById('bank1').style= "box-shadow: 3px 3px 3px 3px #87d3e3;"
//     document.getElementById('bank2').style= "box-shadow: 3px 3px 3px 3px #9b9b9b;"
//     document.getElementById('bank3').style= "box-shadow: 3px 3px 3px 3px #9b9b9b;"
//     document.getElementById('bank4').style= "box-shadow: 3px 3px 3px 3px #9b9b9b;"
//     document.getElementById('bank5').style= "box-shadow: 3px 3px 3px 3px #9b9b9b;"
//     document.getElementById('bank6').style= "box-shadow: 3px 3px 3px 3px #9b9b9b;"
// }));

let bank1 = document.getElementById("bank1");
let bank2 = document.getElementById("bank2");
let bank3 = document.getElementById("bank3");
let bank4 = document.getElementById("bank4");
let bank5 = document.getElementById("bank5");
let bank6 = document.getElementById("bank6");

bank1.addEventListener("click", chooseFunction)
bank2.addEventListener("click", chooseFunction)
bank3.addEventListener("click", chooseFunction)
bank4.addEventListener("click", chooseFunction)
bank5.addEventListener("click", chooseFunction)
bank6.addEventListener("click", chooseFunction)

function chooseFunction () {
    bank1.style= "box-shadow: 3px 3px 3px 3px #9b9b9b;"
    bank2.style= "box-shadow: 3px 3px 3px 3px #9b9b9b;"
    bank3.style= "box-shadow: 3px 3px 3px 3px #9b9b9b;"
    bank4.style= "box-shadow: 3px 3px 3px 3px #9b9b9b;"
    bank5.style= "box-shadow: 3px 3px 3px 3px #9b9b9b;"
    bank6.style= "box-shadow: 3px 3px 3px 3px #9b9b9b;"

    this.style= "box-shadow: 3px 3px 3px 3px #87d3e3;"
}