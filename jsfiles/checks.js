function formatCreditCard(number) {
    var last4Digits = number.slice(-4);
    var hiddenPart = '**** **** **** ';
    return hiddenPart + last4Digits;
}
const cn = document.getElementById('cardnumber');
const cardn = document.getElementById('Cardname');
const expr = document.getElementById('edate');
const cvv = document.getElementById('cvv');
cn.oninput = ()=> {
    
   const val1 =  document.querySelector('.cardnum');

  
   if( cn.value === ''){
    val1.textContent= "**** **** **** ****"
   }else{
   
   
 
    const formattedNumber = formatCreditCard(cn.value);

    val1.textContent = formattedNumber;

   }
   

}
cn.addEventListener('input', function(e) {
    var trimmedValue = e.target.value.replace(/\s+/g, '').replace(/(\d{4})/g, '$1 ').trim();
    e.target.value = trimmedValue;
   
});

cardn.addEventListener('input',() => {
    const chn = document.getElementById('cardfullname');
    if( cardn.value === ''){
        chn.textContent= "Card Holder Name"
       }else{
       
        chn.textContent = cardn.value.toUpperCase();  
       }
})



expr.addEventListener('input',(e) => {
    var inputValue = e.target.value.replace(/\D/g, ''); 
    var formattedValue = formatMMYY(inputValue);
    e.target.value = formattedValue;

    function formatMMYY(value) {
        var formattedValue = value;
        if (value.length > 2) {
            formattedValue = value.slice(0, 2) + '/' + value.slice(2);
        }
        return formattedValue;
    }

    const chn = document.getElementById('emonth');
    const chn1 = document.getElementById('eyear');
  
   const y = expr.value.substring(0, inputValue.length - 2);

   const m = expr.value.substring(3);

    if( expr.value === ''){

        chn.textContent= "mm"
        chn1.textContent= "yyyy"
       }else{

         chn.textContent = y;
        chn1.textContent = m;  
       }
})
cvv.addEventListener('mouseenter',() => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
});
cvv.addEventListener('mouseleave',() => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
});
cvv.addEventListener('input', () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';

    document.querySelector('.cvv-box').innerText = cvv.value;
});
const down = document.getElementById('down');
const down1 = document.getElementById('down1');
const card_con = document.getElementById('card_con');
const card_con1 = document.getElementById('upid1');
var c=0 ;
const sind = document.getElementById("sind");
const sind1 = document.getElementById("sind1");
const sind2 = document.getElementById("sind2");
const sind3 = document.getElementById("sind3");
down.addEventListener('click',() => {
  
    if (c == 0) {
        down.classList.remove('fa-solid', 'fa-angle-up');
        down.classList.add('fa-solid', 'fa-angle-down');
       
        sind.style.opacity = 0;
        sind1.style.opacity = 0;
        sind2.style.opacity = 0;
        sind3.style.opacity = 0;
        card_con.classList.add('downsc');
        c++;
    } else {
        down.classList.remove('fa-solid', 'fa-angle-down');
        down.classList.add('fa-solid', 'fa-angle-up');
        sind.style.opacity = 1;
        sind1.style.opacity = 1;
        sind2.style.opacity = 1;
        sind3.style.opacity = 1;
        card_con.classList.remove('downsc');
        c--;
    }
})
document.getElementById('nexts2').addEventListener('click', () => {
    window.location.href='home.html';
});









