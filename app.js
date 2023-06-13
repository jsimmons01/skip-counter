const btns = document.querySelectorAll(".btn");
const num = document.querySelector("#value");
const submitBtn = document.querySelector('#submit');    
let count = 0;


submitBtn.addEventListener('click',function(e){
    let userNum = Number(document.getElementById('num').value);
    
    e.preventDefault();
     console.log(userNum);

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
})

