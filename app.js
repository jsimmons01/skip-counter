const btns = document.querySelectorAll(".btn");
const submitBtn = document.querySelector('#submit'); 
const numValue = document.querySelector("#value");
const form = document.querySelector('#form');
const text = document.querySelector('#text');
let userNum = 0;
let count = 0;

submitBtn.addEventListener('click',function(e){
    
 let userNum = Number(document.getElementById('num').value);

    e.preventDefault();

    function resetCount(){
      location.reload();   
    }

    if(userNum < 2 || userNum > 100){
        alert('Choose a number between 2-100');
        resetCount();
        
    } else {
        text.textContent = `Counting by: ${userNum}`
    }

     btns.forEach(btn => {
       
        btn.addEventListener('click', function(e){
            let counter = e.currentTarget.classList;
           
            /* I am going to start commenting when I figure something out at the place where I solved so I would forget what I learned. Above I 
            had to reload the page instead of resetinng each thing. The input was duplicating based on the amount of times I reset. I 
            may can figure out another solution, but for now that is what I have. I must assign the input variable locally, otherwise it will keep the intial value which is zero
            Lastly, counter.contains("")  is how i say if this button is pressed do this*/
    
            
            if(counter.contains('decrease')){
                count-= userNum;
               
            }
            if(counter.contains('increase')){
                count+= userNum;
            }
            if(counter.contains('reset')){
              resetCount();
                
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



