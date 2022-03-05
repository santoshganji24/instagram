
window.addEventListener('click',function(event){
    var box = document.querySelector('.docenter');
    if(event.target != box && event.target.parentNode == box){
        box.style.display="none";
    }
})