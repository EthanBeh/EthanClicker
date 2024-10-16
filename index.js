//Ethan clicker
document.getElementById("count-el").innerText = 0
function increment() {
    document.getElementById("count-el").innerHTML = parseInt(document.getElementById("count-el").innerText) + 1;
    console.log(document.getElementById("count-el").innerHTML);
}