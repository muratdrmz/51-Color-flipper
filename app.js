const colorEl=document.querySelector('.color');
const btnEl=document.getElementById('btn');

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

btnEl.addEventListener('click',function(){
 const randomNumber = getRandomNumber();
 document.body.style.backgroundColor = colors[randomNumber];
 colorEl.innerText = colors[randomNumber];
})

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}