var a= 0;
const span = document.getElementById('o');
const procart_con = document.getElementById('procart');
const sub_con = document.getElementById('subtotalcon');
span.addEventListener('click', () => {
    
if(a === 0){
    span.textContent='Open';
    sub_con.classList.add('compress');
    procart_con.classList.add('proSelect');
    a++;
}else{
    span.textContent='Close';
    sub_con.classList.remove('compress');

    procart_con.classList.remove('proSelect');
    a--; 
}

});

