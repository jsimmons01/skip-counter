const btns = document.querySelectorAll(".btn");
const num = document.querySelector("#value");
const userNum = document.querySelector('#num')
let count = 0;

btns.forEach(btn => {

    btn.addEventListener('click', function(e){
        let counter = e.currentTarget.classList;

    if(counter.contains('decrease')){
        count--;
    }
    console.log(count)
    }
    )
    
})