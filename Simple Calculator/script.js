const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.equalBtn');
const clearBtn = document.querySelector('.clearBtn');


for(let i = 0;i < btns.length;i++){
    btns[i].addEventListener('click',function(){
        let number = btns[i].getAttribute('data-num');
        screen.value += number;
    })
}

clearBtn.addEventListener('click',function(){
 screen.value = '';
});

equalBtn.addEventListener('click',function(){
    if(screen.value === ''){
        alert('Input is empty!')
    }else{
        let value = eval(screen.value);
        screen.value = value;
    }
    
})