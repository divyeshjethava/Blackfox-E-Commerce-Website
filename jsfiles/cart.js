import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { getDatabase, ref ,set, get,child ,onValue,update,remove} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import colorNameList from "https://cdnjs.cloudflare.com/ajax/libs/color-name-list/10.20.2/colornames.bestof.esm.min.js";





const firebaseConfig = {
    apiKey: "AIzaSyA4B2H-_JzOObgCECHNINNlckvfHeAiuKM",
    authDomain: "blackfox-the-fashion-stu-c124e.firebaseapp.com",
    databaseURL: "https://blackfox-the-fashion-stu-c124e-default-rtdb.firebaseio.com",
    projectId: "blackfox-the-fashion-stu-c124e",
    storageBucket: "blackfox-the-fashion-stu-c124e.appspot.com",
    messagingSenderId: "256903505813",
    appId: "1:256903505813:web:2eff7266b25555ab98789c",
    measurementId: "G-ZMLGX9F0CP"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  // initialized varibles
  const storage = getStorage();
  const db = getDatabase();
  let c = 0;
  var phoneNumber1 = localStorage.getItem('phoneNumber');
var countimtem = document.getElementById('countitem');
var counti = document.getElementById('countitem1');
  var procart_con = document.getElementById('procart');
  var phone1 = localStorage.getItem('phoneNumber');
 var subTo = document.getElementById('subto1')
 var Total = document.getElementById('total1')
 const bagic = document.getElementById('bagic');
 const bagic1 = document.getElementById('bagic1');
  const popular_mostref1 = ref(db, 'bag/' + phone1 );
  const indianRupeeSymbol = '\u20B9';
  var st = 0;
  var t =0;
  const checkout = document.getElementById('checkOut');
function Addtotable(pname,cp,price,qty,size1,clr,tprice,status,pid){

 
  
  c++;
  countimtem.textContent=c;
  const maindiv = document.createElement('div');
        const maindiv1 = document.createElement('img');
        const title1 = document.createElement('span');
        const size = document.createElement('span');
        const maindiv2 = document.createElement('div');
        const main1 = document.createElement('div');
        const main2 = document.createElement('div');
        const main3 = document.createElement('div');
        const main4 = document.createElement('i'); 
        const main5 = document.createElement('input');
        const main6 = document.createElement('i');
        const main7 = document.createElement('span');
        const main8 = document.createElement('span');


        main8.textContent=clr;
        maindiv.classList.add('cartMaindiv');
        maindiv1.classList.add('cartMainimg');
        maindiv2.classList.add('cartMaindiv2');
       main1.classList.add('main1');
       main2.classList.add('main2');
       main3.classList.add('main3');
       main4.classList.add('main4');
       main5.classList.add('main5');
       main6.classList.add('main6');
       main4.classList.add('fa-solid' ,'fa-plus');
 
main6.classList.add('fa-solid' ,'fa-minus');
main5.setAttribute("type", "number");
main5.setAttribute("id", "cqty");
main5.setAttribute("value", "1");
main7.textContent=indianRupeeSymbol+tprice
     main2.appendChild(main6)
     main2.appendChild(main5)
     main2.appendChild(main4)
   main3.appendChild(main7)

     
        title1.classList.add('titl');
        title1.textContent=pname;
      maindiv1.src=cp;
    
   // st = tprice;
   // subTo.textContent=indianRupeeSymbol+st
       size.textContent="Size : "+size1;
       main1.appendChild(main2);
       main1.appendChild(main3);
    maindiv2.appendChild(title1);
    maindiv2.appendChild(main8);
    maindiv2.appendChild(size);
        maindiv.appendChild(maindiv1);
        maindiv.appendChild(maindiv2);
        maindiv2.appendChild(main1);
      
        procart_con.appendChild(maindiv);
        maindiv.classList.add('cartcon');
        maindiv1.addEventListener('click',() => {
          const popular_mostref = ref(db, 'Products/'+pid );
          const popular_mostref5 = ref(db, 'bag/' + phoneNumber1 + '/' + pid );
          get(popular_mostref5).then((snapshot) => {
          const main = snapshot.val();

            get(popular_mostref).then((snapshot) => {
              if(snapshot.exists()){
                window.location.href = 'proDeatils.html?id='+pid;
              }else{
                 window.location.href='productsColor.html?pid='+main.mproid+"&"+"veid="+pid;
              }
            })
          })


            

         
        });
  main5.value=qty;
  const popular_mostref2 = ref(db, 'bag/' + phone1+ "/" +pid );
    main4.addEventListener('click',()=>{
      main5.value++
          update(popular_mostref2,{
            quantity:main5.value,
            total_price:price*main5.value

          })

     })

    main6.addEventListener('click',()=>{
            let currentValue = parseInt(main5.value);
            if (currentValue > 1) {
            main5.value--
            update(popular_mostref2,{
              quantity:main5.value,
              total_price:price*main5.value
  
            })
            }
   })


  
      
}


function addAllProduct(product){

  procart_con.innerHTML="";
  product.forEach(element => {
 
    Addtotable(element.p_name,element.cover_image,element.p_price,element.quantity,element.size,element.color,element.total_price,element.f_status,element.p_id);
  });
}

function getdataProduct() {

 
  const popular_mostref1 = ref(db, 'bag/' + phone1 );
  get(popular_mostref1).then((snapshot) => {
        
    var products = [];

    snapshot.forEach(childSnapshot =>{
      
         products.push(childSnapshot.val());
    });
    
    addAllProduct(products);
  });

}
function getdatarealtime() {

 
  var popular_mostref1 = ref(db, 'bag/' + phone1 );
  onValue(popular_mostref1,(snapshot)=>{
                   
    var products = [];

    snapshot.forEach(childSnapshot =>{
         products.push(childSnapshot.val());
    });
    addAllProduct(products);
  })

}
getdatarealtime();

const bag = document.getElementById('carticonbtn');
const bagwish = document.getElementById('carticonbtn1');
const add_cont1 = document.getElementById('addCart');
const add_cont2 = document.getElementById('adcrt');
const add_cont3 = document.getElementById('addwish');
window.plusi = document.getElementById('max');
window.plusi1 = document.getElementById('max1');

bag.addEventListener('click', () => {
 
        document.getElementById('icons').style.opacity='0';
        add_cont1.classList.add('selected1');
        add_cont2.classList.add('selected2');
        
        var bodyElement = document.body;
        bodyElement.style.overflow='hidden';
        plusi.style.display='none'
        plusi1.style.display='none'
        head.style.opacity=1;
    
    
});


function getTotalRecordCount() {
  return get(popular_mostref1).then((snapshot) => {
    let count = 0;

    snapshot.forEach(() => {
        count++;
    });
 
    return count; 
  });
}

function updateRecordCount() {
  onValue(popular_mostref1, (snapshot) => {
    
    let count = 0;
    snapshot.forEach(() => {
        count++;
    });
    countimtem.textContent=count;
    counti.textContent=count;
    bagic.textContent=count;
  });
}

updateRecordCount();

function calculateTotalPrice(cartData) {
  let totalPrice = 0;

  if (cartData && typeof cartData === 'object') {
  
    for (const key in cartData) {

      if (cartData[key] && cartData[key].total_price) {
        totalPrice += cartData[key].total_price;
      }
    }
  }
  return totalPrice;
}


const popular_mostref3 = ref(db, 'bag/' + phone1);

onValue(popular_mostref3, (snapshot) => {

  const cartData = snapshot.val();

  const totalPrice = calculateTotalPrice(cartData);
 
  subTo.textContent =indianRupeeSymbol+ totalPrice;
  Total.textContent =indianRupeeSymbol+ totalPrice;
  bagic1.textContent = indianRupeeSymbol + totalPrice;

  checkout.addEventListener('click',() => {
    window.location.href = 'checkout.html?tp='+totalPrice
      });
});


document.getElementById('close2').addEventListener('click', () => {
  document.getElementById('icons').style.opacity='1';
  add_cont1.classList.remove('selected1');
  add_cont2.classList.remove('selected2');
  var bodyElement = document.body;
  bodyElement.style.overflowY='scroll';
  plusi.style.display='initial'
  plusi1.style.display='initial'

});

function isLoggedIn(phoneNumber) {
  return database.ref('user_master/' + phoneNumber).once('phone').then(function(snapshot) {
      return snapshot.exists();
  });
}





document.getElementById('logout').addEventListener('click' , () => {
  localStorage.clear()
  window.location.href='signin.html';
});
var phoneNumber = localStorage.getItem('phoneNumber');
document.getElementById('regi').addEventListener('click',() => {
  if (!phoneNumber) {

  }else{
    alert('Your Are Already Registered On This Mobile Number :'+phoneNumber + ' ' + 'If You Want Registered another Mobile Number You Can First logout');
  }
});

bagwish.addEventListener('click',() => {
  add_cont3.classList.remove('selected3');
  add_cont1.classList.add('selected1');
  add_cont2.classList.add('selected2');


  var bodyElement = document.body;
  bodyElement.style.overflow='hidden';

 
})
const clearBag = document.getElementById('cbag');
clearBag.addEventListener('click',() => {
  const popular_mostref1 = ref(db, 'bag/' + phone1 );
  const cleardot = document.getElementById('bagclear');
  remove(popular_mostref1)
   cleardot.classList.remove('shows');


});


const profileBtn = document.getElementById('prof');
profileBtn.addEventListener('click', () => {
window.location.href='profile.html';
});

const pro1 = ref(db,'user_master/'+ phone1);
const img = document.getElementById('prof');
get(pro1).then((snapshot) => {
  
  img.src = snapshot.child('image').val();


})
const bar = document.getElementById('bar');
const ul = document.getElementById('ul');
const cross = document.getElementById('cross');
bar.addEventListener('click',() => {
  ul.classList.add('uls');
  });
  cross.addEventListener('click',() => {
      ul.classList.remove('uls');
  });