//Ethan clicker
document.getElementById("count-el").innerText = 0
let savedArr = [];
function increment() {
    document.getElementById("count-el").innerHTML = parseInt(document.getElementById("count-el").innerText) + 1;
    console.log(document.getElementById("count-el").innerHTML);
}
function save() {
    document.getElementById("saved").innerHTML = document.getElementById("saved").innerHTML + document.getElementById("count-el").innerText + " - "
}