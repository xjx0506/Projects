
const arr = [
{quote:'ya',name:'eiwuoi'},
{quote:'yyhaha',name:'aoiweureiwuoi'},
{quote:'yyy',name:'xjx'},
{quote:'xxx',name:'hs'},
{quote:'xuxu',name:'iii'},
{quote:'xixix',name:'aqwbqdbtbth'}];

const quote = document.querySelector("#quote");
const quoteBtn = document.querySelector("#quoteBtn");
const quoteAuthor = document.querySelector("#quoteAuthor");
quoteBtn.addEventListener('click',getQuote);

function getQuote(){
	let number = Math.floor(Math.random()*arr.length);
	quoteAuthor.innerHTML = arr[number].name;
	quote.innerHTML = arr[number].quote;
	
	
}