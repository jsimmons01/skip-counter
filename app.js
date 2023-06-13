const btns = document.querySelectorAll(".btn");
const submitBtn = document.querySelector('#submit'); 
const numValue = document.querySelector("#value")   
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
            }
            value.textContent = count
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

