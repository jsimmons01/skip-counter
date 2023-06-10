const btns = document.querySelectorAll(".btn");
const num = document.querySelector("#value");

let count = 0;

btns.forEach( btn => {
    btn.addEventListener('click', function(e){
       const counter = e.currentTarget.classList;

       if(counter.contains('count-down')){
        count--;  
   
       } 
       if(counter.contains('count-up')){
        count++;
       } 
       if(counter.contains('reset')){
        count = 0;
       }
       if(count < 0){
        num.style.color = 'red';
       } else if(count > 0){
        num.style.color = 'green';
       } else {
        num.style.color = 'black';
       }
       num.textContent =  count;
       
    })
        
    })

   