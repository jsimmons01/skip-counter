const btns = document.querySelectorAll(".btn");
const submitBtn = document.querySelector('#submit'); 
const numValue = document.querySelector("#value");
const form = document.querySelector('#form');
const text = document.querySelector('#text');
let count = 0;


submitBtn.addEventListener('click',function(e){
    
    let userNum = Number(document.getElementById('num').value); 
    e.preventDefault();

     btns.forEach(btn => {

        btn.addEventListener('click', function(e){
            let counter = e.currentTarget.classList;
    
            if(counter.contains('decrease')){
                count-= userNum;
            }
            if(counter.contains('increase')){
                count+= userNum;
            }
            if(counter.contains('reset')){
                count = 0;
                userNum = 0;
                form.reset();
                text.textContent = 'Insert a number'
                
            }
            if(userNum){
                        text.textContent = 'Counting By'
                    }
            numValue.textContent = count;
         
            if(count< 0){
                numValue.style.color = 'red';
            }
            if(count> 0){
                numValue.style.color = 'green';    
            }
            if(count === 0){
                numValue.style.color = 'black';
            }    
           
        })
        
    })
})



