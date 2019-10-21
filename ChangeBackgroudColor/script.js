const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');
const colors = ["yellow","green","red","#FA8072"];

colorBtn.addEventListener('click',changeColor);

function changeColor(){
	var random = Math.floor(Math.random()*colors.length);

	bodyBcg.style.backgroundColor = colors[random];



}
