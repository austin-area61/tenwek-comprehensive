const spinnerWrapper=document.querySelector('.spinner-wrapper');
window.addEventListener('load',()=>{
    spinnerWrapper.style.opacity ="0";

    setTimeout(()=>{
        spinnerWrapper.style.display='none';    
    }, 200)
});
    



// counter goes here
const counters=document.querySelectorAll('.counter');

counters.forEach(counter =>{
    counter.innerText='0';

    const updateCounter= ()=>{
        const target=+counter.getAttribute('data-target');
        const c=+counter.innerText;
        const increment= target/5000;

    if (c< target){
      counter.innerText=`${Math.ceil(c+increment )}`;
      setTimeout(updateCounter, 1) ; 
    }
    else{
        counter.innerText=target;
    }
    };
    updateCounter()

});

// top up scroll
const toTop=document.querySelector(".to-top");


window.addEventListener("scroll",()=>{
    if(window.pageYOffset> 100){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
});
// data table
$(document).ready(function () {
    $('#example').DataTable();
});