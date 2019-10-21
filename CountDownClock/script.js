const lowerCount = document.querySelector('#lowerCountBtn');
const addCount = document.querySelector('#addCountBtn');
const counter = document.querySelector('.counter');

let count = 0;

addCount.addEventListener('click',increment);
lowerCount.addEventListener('click',decrement);

function increment(){
    count++;
    counter.innerHTML = count;
    if(counter.innerHTML > '0'){
        counter.style.color = 'coral';
    }
    else{
        counter.style.color = 'white';
    }
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:900,fill:'forwards'});
}

function decrement(){
    count--;
    counter.innerHTML = count;
    if(counter.innerHTML < '0'){
        counter.style.color = 'red';
    }
    else{
        counter.style.color = 'white';
    }
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:900,fill:'forwards'});
}



