//code of toggling dark mode and light mode

let btn = document.querySelector("#toggle");
let color = "light"
toggle.addEventListener("click",() =>{
let body = document.querySelector("body")
if(color === "light"){
body.style.backgroundColor = "black"
color = "dark";
btn.innerHTML= "Light Mode";
}
else {
    body.style.backgroundColor = "white"
    color = "light";
    btn.innerHTML= "Dark Mode";
}
})



//Event Delegation

let  random = (number)=> {
  return Math.floor(Math.random() * number);
}

function backGroundChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  return rndCol;
}

let container = document.querySelector("#container");

container.addEventListener("click", (event) => {
  event.target.style.backgroundColor = backGroundChange();
});