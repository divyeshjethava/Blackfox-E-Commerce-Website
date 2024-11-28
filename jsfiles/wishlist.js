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
  const movetobag = document.getElementById('wishmtb');
var countitems = document.getElementById('countimtem');
  var procart_con = document.getElementById('wishpro');
  var phone1 = localStorage.getItem('phoneNumber');
 var subTo = document.getElementById('subto1')
 var Total = document.getElementById('total1')
  const popular_mostref1 = ref(db, 'bag/' + phone1 );
  const indianRupeeSymbol = '\u20B9';
  var st = 0;
  var t =0;
function Addtotable(pname,cp,price,qty,size1,clr,tprice,status,pid){

  
  
  c++;
  countitems.textContent=c;
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
        const main7 = document.createElement('button');
        const main8 = document.createElement('span');
   main7.textContent="MOVE TO BAG"
        main7.classList.add('wishmtb');
        main8.textContent=clr;
        maindiv.classList.add('cartMaindiv');
        maindiv1.classList.add('cartMainimg');
        maindiv2.classList.add('cartMaindiv2');
        main8.classList.add('wishprice');
 


      
      
        title1.classList.add('titl');
        title1.textContent=pname;
      maindiv1.src=cp;
    
   // st = tprice;
   // subTo.textContent=indianRupeeSymbol+st
    main8.textContent=indianRupeeSymbol+price;
       main1.appendChild(main2);
       main1.appendChild(main3);
    maindiv2.appendChild(title1);
   maindiv2.appendChild(main8);
   maindiv2.appendChild(main7);
        maindiv.appendChild(maindiv1);
        maindiv.appendChild(maindiv2);
        maindiv2.appendChild(main1);
      
        procart_con.appendChild(maindiv);
        maindiv.classList.add('cartcon');
        const popular_mostref5 = ref(db, 'wishlist/' + phoneNumber1 + '/' + pid );
        main7.addEventListener('click',() => {
          
            const popular_mostref1 = ref(db, 'bag/' + phone1 + '/' + pid );
            const popular_mostref2 = ref(db, 'Products/' + pid );
         
            get(popular_mostref2).then((snapshot) => {

              if (snapshot.exists()) {
                const data1 = snapshot.val(); 
               
               var photo1 = data1.cover_image; 
                 const f_status = data1.f_status;
                 const p_name = data1.p_name;
                 const p_price = data1.price;
                 const tprice =  parseInt(p_price) ;
                 const clrs = data1.colorname;
                 const selectSize = data1.size
       
                 const cartdt ={
                    cover_image:photo1,
                    f_status:f_status,
                    p_name:p_name,
                    p_price:p_price,
                    p_id:pid,
                    quantity:1,
                    total_price:tprice,
                    size:selectSize[0],
                    color:clrs
                    
                 };
                 set(popular_mostref1,cartdt).then(() => {
                /*  update(popular_mostref2, {
                    "f_status":1
                    })
                  remove(popular_mostref5)
                  .then(() => {
                })
                
           */
                 });
        
                 
              }else{
                const popular_mostref5 = ref(db, 'wishlist/' + phoneNumber1 + '/' + pid );
                get(popular_mostref5).then((snapshot) => {
                const main = snapshot.val();
                const popular_mostref2 = ref(db, 'Products/' + main.mproid + '/' +'varition/'+ pid);
                var qty =document.getElementById('pqty');

                get(popular_mostref2).then((snapshot) => {

                    if (snapshot.exists()) {
                      const data1 = snapshot.val(); 
                     
                     var photo1 = data1.cover_image; 
                       const f_status = data1.f_status;
                       const p_name = data1.p_name;
                       const p_price = data1.price;
                       const tprice =  parseInt(p_price) ;
                       const clrs = data1.colorname;
                       const selectSize = data1.size
             
                       const cartdt ={
                          cover_image:photo1,
                          f_status:f_status,
                          p_name:p_name,
                          p_price:p_price,
                          p_id:pid,
                          quantity:1,
                          total_price:tprice,
                          size:selectSize[0],
                          color:clrs,
                          mproid:main.mproid
                          
                       };
                       set(popular_mostref1,cartdt).then(() => {
                    /*    update(popular_mostref2, {
                          "f_status":1
                          })
                        remove(popular_mostref5)
                        .then(() => {
                      })
               */
                 
                       });
                    }

                });
                })
             
              }
        
            })
        });
        
       
        maindiv1.addEventListener('click',() => {
          const popular_mostref = ref(db, 'Products/'+pid );
          const popular_mostref5 = ref(db, 'wishlist/' + phoneNumber1 + '/' + pid );
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
 
  
      
}

function addAllProduct(product){

  procart_con.innerHTML="";
  product.forEach(element => {
 
    Addtotable(element.p_name,element.cover_image,element.p_price,element.quantity,element.size,element.color,element.total_price,element.f_status,element.p_id);
  });
}

function getdataProduct() {

 
  const popular_mostref1 = ref(db, 'wishlist/' + phone1 );
  get(popular_mostref1).then((snapshot) => {
        
    var products = [];

    snapshot.forEach(childSnapshot =>{
      
         products.push(childSnapshot.val());
    });
    
    addAllProduct(products);
  });

}
var popular_mostref2 = ref(db, 'wishlist/' + phone1 );
function getdatarealtime() {

   
 
  onValue(popular_mostref2,(snapshot)=>{
                   
    var products = [];

    snapshot.forEach(childSnapshot =>{
         products.push(childSnapshot.val());
    });
    addAllProduct(products);
  })

}
getdatarealtime();

const wish = document.getElementById('wishlist');
const add_cont1 = document.getElementById('addwish');
const add_cont2 = document.getElementById('adcrt');
window.plusi = document.getElementById('max');
window.plusi1 = document.getElementById('max1');

wish.addEventListener('click', () => {
 
        document.getElementById('icons').style.opacity='0';
        add_cont1.classList.add('selected3');
        add_cont2.classList.add('selected2');
        var bodyElement = document.body;
        bodyElement.style.overflow='hidden';
    
        head.style.opacity=1;
    
    
});
function getTotalRecordCount() {
  return get(popular_mostref2).then((snapshot) => {
    let count = 0;

    snapshot.forEach(() => {
        count++;
    });
 
    return count; 
  });
}

function updateRecordCount() {
  onValue(popular_mostref2, (snapshot) => {
    
    let count = 0;
    snapshot.forEach(() => {
        count++;
    });

    countitems.textContent=count;
  });
}

updateRecordCount();



document.getElementById('close3').addEventListener('click', () => {
  document.getElementById('icons').style.opacity='1';
  add_cont1.classList.remove('selected3');
  add_cont2.classList.remove('selected2');
  var bodyElement = document.body;
  bodyElement.style.overflowY='scroll';
  plusi.style.display='initial'
  plusi1.style.display='initial'
})
