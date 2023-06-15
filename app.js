const btns = document.querySelectorAll(".btn");
const submitBtn = document.querySelector('#submit'); 
const numValue = document.querySelector("#value");
const form = document.querySelector('#form');
const text = document.querySelector('#text');
let userNum = '';
let count = 0;



submitBtn.addEventListener('click',function(e){
    
    userNum = document.getElementById('num').value;
    userInt = Number(userNum)
    
    console.log(userNum)
    console.log('Count is:' + count)
    e.preventDefault();

    function resetCount(){
      location.reload();   
    }

    if(userInt < 2 || userInt > 100){
        alert('Choose a number between 2-100');
        resetCount();
        
    } else {
        text.textContent = `Counting by: ${userInt}`
    }

     btns.forEach(btn => {
       
        btn.addEventListener('click', function(e){
            let counter = e.currentTarget.classList;
           
            
            if(counter.contains('decrease')){
                count-= userInt;
                console.log(userInt)
            }
            if(counter.contains('increase')){
                count+= userInt;
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



