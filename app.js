const btns = document.querySelectorAll(".btn");
const num = document.querySelector("#value");
const submitBtn = document.querySelector('#submit');
let userNum = localStorage.getItem('input');

let count = 0;

function getUserInput(){
    userNum = document.querySelector('#num').value;
    localStorage.setItem('userNum', input);
    
}

submitBtn.addEventListener('click',function(){
    console.log(getUserInput());
    
})

btns.forEach(btn => {

    btn.addEventListener('click', function(e){
        let counter = e.currentTarget.classList;

        if(counter.contains('decrease')){
            count-= getUserInput();
        }
        if(counter.contains('increase')){
            count+= getUserInput();
        }
        if(counter.contains('reset')){
            count = 0;
        }
        value.textContent = count
        if(count< 0){
            value.style.color = 'red';
        }
        if(count> 0){
            value.style.color = 'green';    
        }
        if(count === 0){
            value.style.color = 'black';
        }    
       
    })
    
})