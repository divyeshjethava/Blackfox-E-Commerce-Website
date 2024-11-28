const clear = document.getElementById('bagclear');
const clear1 = document.getElementById('clearbag');
var d = 0;
clear1.addEventListener('click',() => {
if(d === 0){
    clear.classList.add('shows');
    d++;
}else{
    clear.classList.remove('shows');
    d--;   
}
});