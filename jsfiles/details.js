import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { getDatabase, ref ,set, get,child ,query,orderByKey,startAt,orderByChild,equalTo,update,remove} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

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

var photo1;
var photo;


  document.addEventListener('DOMContentLoaded', () => { 

    const details_con = document.getElementById('details');
    const simg_con1 = document.getElementById("sp_imge");
    const dotsContainer = document.getElementById('carousel-dots');
    
    const urlParams = new URLSearchParams(window.location.search);
    const data = urlParams.get('id');
    
    const popular_mostref = ref(db, 'Products/' + data );
  var cid =data;

get(popular_mostref).then((snapshot) => {
  if (snapshot.exists()) {
    const data = snapshot.val(); 
   photo = data.sub_image; 
   photo1 = data.sub_image;
    const p_title = data.p_name;
    const p_price = data.price;
    const size1 = data.size;
    const color1 = data.colour;
    const des = data.description;
    const variation = snapshot.child('varition');
    const f_status = data.f_status;
    const colorName = data.colorName;
    const cover_image = data.cover_image;

    


    simg_con1.innerHTML = '';
    dotsContainer.innerHTML = '';
   const pt = document.createElement('h1');
   const pp = document.createElement('span');
   const txt = document.createElement('span');
   const s_size = document.createElement('span');
   const s_size_1 = document.createElement('div');
   const selectSizeMes = document.createElement('span');
   
   pp.textContent = "Rs. "+p_price+".00";
   pt.textContent = p_title;
   txt.textContent = "(incl. of all taxes)";
   s_size.textContent = "Select Size";
  selectSizeMes.textContent="Please Select the size"
  selectSizeMes.classList.add('selectSizeMes');
  
   details_con.appendChild(pt);
   details_con.appendChild(pp);
   details_con.appendChild(txt);
   details_con.appendChild(s_size);
   details_con.appendChild(selectSizeMes)
   var selectedValue = null;


var selectSize ;
for (let i = 0; i < size1.length; i++) {
  let sizeDiv = document.createElement('div');
 
  sizeDiv.textContent = size1[i];
  
  sizeDiv.classList.add('sizediv');

  sizeDiv.style.marginBottom = '20px';

  sizeDiv.addEventListener('click', function() {
      var allSizeDivs = document.querySelectorAll('.sizediv');
    
      allSizeDivs.forEach(function(div) {
          div.classList.remove('selected');
       
      });
  
      sizeDiv.classList.add('selected'); // Add 'selected' class to the clicked sizeDiv
    
  
      selectSize = size1[i];
  });

  s_size_1.appendChild(sizeDiv);
}
    
details_con.appendChild(s_size_1);
const qty = document.createElement('div');
qty.setAttribute('id','qty');
const qty1 = document.createElement('span');
const plus = document.createElement('i');
const min = document.createElement('i');
const iqty = document.createElement("input");
const bTnDiv = document.createElement('div');
const clrdiv = document.createElement('div');
const border = document.createElement('div');
const border1 = document.createElement('div');
const border2 = document.createElement('div');
const border3 = document.createElement('div');
const acart = document.createElement('button');
const bnow = document.createElement('button');
const clr = document.createElement('span');
const destitle = document.createElement('span');
const shareDiv = document.createElement('div');
const share = document.createElement('span');
const descrip = document.createElement('div');
const desc = document.createElement('p');
const insta = document.createElement('i');
const facebook = document.createElement('i');
const twiter = document.createElement('i');
const pintress = document.createElement('i');
const whtsapp = document.createElement('i');
const manucontain = document.createElement('div');
const mcon = document.createElement('div');
const mtitle = document.createElement('span');
const plusi = document.createElement('i');
const mini = document.createElement('i');

const mname = document.createElement('span');
const maddress = document.createElement('span');
const cor = document.createElement('span');
const ccc = document.createElement('span');
const mid = document.createElement('span');

const ship_retu = document.createElement('div');
const srpo = document.createElement('div');
const returns_po = document.createElement('span');
const plusi1 = document.createElement('i');
const mini1 = document.createElement('i');

const ship = document.createElement('span');
const ship1 = document.createElement('span');
const ship2 = document.createElement('span');
const ship3 = document.createElement('span');
const ship4 = document.createElement('span');
const ship5 = document.createElement('span');

const returns = document.createElement('span');
const returns1 = document.createElement('span');
const returns2 = document.createElement('span');
const returns3 = document.createElement('span');
const returns4 = document.createElement('span');
const returns5 = document.createElement('span');
const returns6 = document.createElement('span');
const returns7 = document.createElement('span');
const returns8 = document.createElement('span');
const returns9 = document.createElement('span');
const returns10 = document.createElement('span');
const returns11 = document.createElement('span');
const returns12 = document.createElement('span');
const returns13 = document.createElement('span');

const ex = document.createElement('span');
const ex1 = document.createElement('span');
const ex2 = document.createElement('span');
const ex3 = document.createElement('span');
const ex4 = document.createElement('span');
const ex5 = document.createElement('span');
const ex6 = document.createElement('span');




iqty.setAttribute("type", "number");
iqty.setAttribute("id", "pqty");
iqty.setAttribute("value", "1");
qty1.textContent="Quantity";
qty.appendChild(qty1);
qty.appendChild(min);
qty.appendChild(iqty)
qty.appendChild(plus);

details_con.appendChild(qty);
bTnDiv.appendChild(acart);
bTnDiv.appendChild(bnow);

details_con.appendChild(bTnDiv);
acart.textContent="ADD TO CART";
bnow.textContent="BUY IT NOW";
clr.textContent="+Colours"
details_con.appendChild(clr);
var colorsArray = [];

const clrdiv1 = document.createElement('div');
  clrdiv1.style.background=color1;
  clrdiv1.classList.add('clrdiv1');
  clrdiv1.style.border = '2px solid black'; // Remove default focus outline
  

  clrdiv.appendChild(clrdiv1);
const add_cont1 = document.getElementById('addCart');
const add_cont2 = document.getElementById('adcrt');
//colorsArray.push({ color: color1, veriti: cid });

function isLoggedIn(phoneNumber) {
  return database.ref('user_master/' + phoneNumber).once('phone').then(function(snapshot) {
      return snapshot.exists();
  });
}
const closea = document.getElementById('close');
closea.addEventListener('click',() => {
  
  document.getElementById('adcrtcon').style.display = 'none';
})


acart.addEventListener('click',() => {
  var phoneNumber = localStorage.getItem('phoneNumber');
   
   if(selectSize === undefined){

    selectSizeMes.style.display='initial';
   

   }else if (phoneNumber === null) {
      document.getElementById('adcrtcon').style.display = 'block';
      
  }else{
    selectSizeMes.style.display='none';
    var phoneNumber1 = localStorage.getItem('phoneNumber');
    const popular_mostref1 = ref(db, 'bag/' + phoneNumber1 + '/' + cid );
    const popular_mostref2 = ref(db, 'Products/' + cid );
    var qty =document.getElementById('pqty');
    get(popular_mostref2).then((snapshot) => {
      if (snapshot.exists()) {
        const data1 = snapshot.val(); 
       var photo1 = data1.cover_image; 
         var f_status = data1.f_status;
         var p_name = data1.p_name;
         var p_price = data1.price;
         var tprice = p_price * qty.value;
         var clrs = data1.colorname;

         const cartdt ={
            cover_image:photo1,
            f_status:f_status,
            p_name:p_name,
            p_price:p_price,
            p_id:cid,
            quantity:qty.value,
            total_price:tprice,
            size:selectSize,
            color:clrs
            
         };
         set(popular_mostref1,cartdt).then(() => {
          
        
          document.getElementById('icons').style.opacity='0';
          add_cont1.classList.add('selected1');
          add_cont2.classList.add('selected2');
          var bodyElement = document.body;
          bodyElement.style.overflow='hidden';
          plusi.style.display='none'
          plusi1.style.display='none'
         });

         
      }

    })

    
  }

})

document.getElementById('close2').addEventListener('click', () => {
  document.getElementById('icons').style.opacity='1';
  add_cont1.classList.remove('selected1');
  add_cont2.classList.remove('selected2');
  var bodyElement = document.body;
  bodyElement.style.overflowY='scroll';
  plusi.style.display='initial'
  plusi1.style.display='initial'

});
variation.forEach(function(variationSnapshot) {
  var vari = variationSnapshot.val();
  var color = vari.colour;
 var verid = vari.p_id;
 
  colorsArray.push({ color: color, veriti: verid });

 
})
colorsArray.forEach((color1) =>{
  const clrdiv1 = document.createElement('div');
  clrdiv1.style.background=color1.color;
  clrdiv1.classList.add('clrdiv1');
  clrdiv.appendChild(clrdiv1);

  clrdiv1.addEventListener('click',() =>{
    window.location.href='productsColor.html?pid='+cid+"&"+"veid="+color1.veriti;
  })


})
details_con.appendChild(clrdiv);

details_con.appendChild(border);
destitle.textContent="DESCRIPTION";
share.textContent="SHARE";
shareDiv.appendChild(share);
shareDiv.appendChild(insta);
shareDiv.appendChild(facebook);
shareDiv.appendChild(twiter);
shareDiv.appendChild(pintress);
shareDiv.appendChild(whtsapp);
descrip.appendChild(destitle);
desc.textContent=des;
descrip.appendChild(desc);
descrip.appendChild(shareDiv);
details_con.appendChild(descrip);
details_con.appendChild(border1);
mtitle.textContent="MANUFACTURER DETAILS";
mcon.appendChild(mtitle);
mcon.appendChild(plusi);
mcon.appendChild(mini);
mname.textContent="Blackfox Textiles Private Limited";
maddress.textContent="Address - 27, VTMS Arcade, Bomannahalli, Bengaluru, 560068";
cor.textContent="Country of Origin - India";
ccc.textContent="Contact Customer Care at +91 80 66085236";
mid.textContent="Mail ID: support@blackfoxthefashionstudio.com"
manucontain.appendChild(mcon);
manucontain.appendChild(mname);
manucontain.appendChild(maddress);
manucontain.appendChild(cor);
manucontain.appendChild(ccc);
manucontain.appendChild(mid);

details_con.appendChild(manucontain);
details_con.appendChild(border2);
plusi.setAttribute('id','max');
mini.setAttribute('id','mini');

plusi1.setAttribute('id','max1');
mini1.setAttribute('id','mini1');
returns_po.textContent="SHIPPING, RETURN AND EXCHANGE";
ship.textContent="SHIPPING - ";
ship1.textContent="100Rs shipping charges will be charged on Orders Below 1500Rs";
ship2.textContent="For international orders, customs duties may be levied at the time of delivery in certain countries.";
ship3.textContent="Product are shipped from our warehouse within 4 working days.";
ship4.textContent="The order will be delivered in 10 working days.";
ship5.textContent="You will receive order tracking number as soon as we ship your order.";

returns.textContent="RETURNS -";
returns1.textContent="We have 7 days return policy (only for returnable products).";
returns2.textContent="Please ensure that the products you return are unused, unworn and the original tags are intact.";
returns3.textContent="International orders are not eligible for return.";
returns4.textContent="Once the product is picked Refund will be initiated in 3 working days to the original source account for prepaid orders, For the COD orders razorpay link will be sent to registered email ID.";
returns5.textContent="Please share the package unboxing video for wrong product / Missing item received.";
returns6.textContent="Don’t Handover Product without pick-up slip or SMS Confirmation.";
returns7.textContent="Item purchase during sale is non-returnable.";
returns8.textContent="Post wash query will only entertain within a month time from the date of delivery.";
returns9.textContent="Only exchange will be applicable on order purchase on sale/offer.";
returns10.textContent="Only one time exchange is allowed.";
returns11.textContent="Customer has to self-ship the product if the pin code is out of serviceable area with reverse logistic.( Note - Your courier cost do not exceed above Inr 300 .We request you to self ship the products by Speed Post as your courier service)";
returns12.textContent="Don’t Accept if the package is tampered.";
returns13.textContent="Don’t share the OTP with carrier if you haven’t received the product.";

ex.textContent="EXCHANGE -";
ex1.textContent="Exchange is not available for Mask, Boxers and Socks & Products at or below Rs.899/-";
ex2.textContent="There is no additional charge for any exchange orders.";
ex3.textContent="For new orders of lower price, the balance amount will be refunded as a gift voucher.";
ex4.textContent="Size exchange is subject to availability. ";
ex5.textContent="Please share the package unboxing video for wrong product received.";
ex6.textContent="For further detailes refer the link - Terms & Conditions and FAQ.";

srpo.appendChild(returns_po);
srpo.appendChild(plusi1);
srpo.appendChild(mini1);
ship_retu.appendChild(srpo);

ship_retu.appendChild(ship);
ship_retu.appendChild(ship1);
ship_retu.appendChild(ship2);
ship_retu.appendChild(ship3);
ship_retu.appendChild(ship4);
ship_retu.appendChild(ship5);

ship_retu.appendChild(returns);
ship_retu.appendChild(returns1);
ship_retu.appendChild(returns2);
ship_retu.appendChild(returns3);
ship_retu.appendChild(returns4);
ship_retu.appendChild(returns5);
ship_retu.appendChild(returns6);
ship_retu.appendChild(returns7);
ship_retu.appendChild(returns8);
ship_retu.appendChild(returns9);
ship_retu.appendChild(returns10);
ship_retu.appendChild(returns11);
ship_retu.appendChild(returns12);
ship_retu.appendChild(returns13);

ship_retu.appendChild(ex);
ship_retu.appendChild(ex1);
ship_retu.appendChild(ex2);
ship_retu.appendChild(ex3);
ship_retu.appendChild(ex4);
ship_retu.appendChild(ex5);
ship_retu.appendChild(ex6);
details_con.appendChild(ship_retu);
details_con.appendChild(border3);

//add classes

pp.classList.add('p_prs');
txt.classList.add('txt');
s_size.classList.add("ssize");
s_size_1.classList.add('ss1');
qty1.classList.add('qty1');
plus.classList.add('fa-solid' ,'fa-plus');
min.classList.add('fa-solid' ,'fa-minus');
bTnDiv.classList.add('btndiv');
bnow.classList.add('buynow');
acart.classList.add('addcart');
clr.classList.add('clr');
clrdiv.classList.add('clrdiv');
border.classList.add('border');
border1.classList.add('border');
border2.classList.add('border');
border3.classList.add('border');
descrip.classList.add('des');
desc.classList.add('pg');
destitle.classList.add('destitle');
share.classList.add('share');
shareDiv.classList.add('sdiv');
insta.classList.add('fab', 'fa-instagram');
facebook.classList.add('fab', 'fa-facebook-f');
twiter.classList.add('fab', 'fa-twitter');
pintress.classList.add('fab', 'fa-pinterest');
whtsapp.classList.add('fab', 'fa-whatsapp');
manucontain.classList.add('m_con');
mcon.classList.add('mcon');
mtitle.classList.add('mtitle');
plusi.classList.add('fa-solid' ,'fa-plus');
mini.classList.add('fa-solid' ,'fa-minus');
mname.classList.add('mn');
maddress.classList.add('ma');
cor.classList.add('mc');
ccc.classList.add('mcc');
mid.classList.add('mid');
ship_retu.classList.add('shipg');
srpo.classList.add('return');
plusi.classList.add('max');
plusi1.classList.add('max');
plusi1.classList.add('fa-solid' ,'fa-plus');
mini1.classList.add('fa-solid' ,'fa-minus');
ship.classList.add("ship");
ship1.classList.add("ships");
ship2.classList.add("ships");
ship3.classList.add("ships");
ship4.classList.add("ships");
ship5.classList.add("ships");
returns.classList.add("ship");
returns1.classList.add("ships");
returns7.classList.add("ships");
returns2.classList.add("ships");
returns3.classList.add("ships");
returns4.classList.add("ships");
returns5.classList.add("ships");
returns6.classList.add("ships");
returns8.classList.add("ships");
returns9.classList.add("ships");
returns10.classList.add("ships");
returns11.classList.add("ships");
returns12.classList.add("ships");
returns13.classList.add("ships");
ex.classList.add("ship");
ex1.classList.add("ships");
ex2.classList.add("ships");
ex3.classList.add("ships");
ex4.classList.add("ships");
ex5.classList.add("ships");
ex6.classList.add("ships");



var phoneNumber1 = localStorage.getItem('phoneNumber');
const updateRef = ref(db, 'Products/' + cid );
const popular_mostref3 = ref(db, 'wishlist/' + phoneNumber1 + '/' + cid );
var l = f_status;
var qtty = data.quantity;
const likes = document.getElementById('likes1');


likes.addEventListener('click',()=>{
 

  if (l == 0) {
    set(popular_mostref3,({

      cover_image:cover_image,
              f_status:1,
              p_name:p_title,
              p_price:p_price,
              p_id:cid,
              quantity:qtty
             

     })).then( () => {
      likes.classList.remove("far", "fa-heart"); 
      likes.classList.add("fas", "fa-heart");
      l++;
     });
  
     update(updateRef, {
       "f_status":1
       })
    

   
} else if (l == 1) {
 

  update((updateRef),{
    f_status:0
   })
  remove(popular_mostref3)
  .then(() => {
    likes.classList.remove("fas", "fa-heart");
    likes.classList.add("far", "fa-heart");
    l--;
})
   
}

});


if (f_status === 1) {

  likes.classList.remove("far", "fa-heart"); 
  likes.classList.add("fas", "fa-heart");

  }else{
    
       likes.classList.remove("fas", "fa-heart");
       likes.classList.add("far", "fa-heart");
 }





plus.addEventListener('click',()=>{
iqty.value++
})
min.addEventListener('click',()=>{
  let currentValue = parseInt(iqty.value);
  if (currentValue > 1) {
  iqty.value--
  }
  })
  
  window.plusi = document.getElementById('max');
  window.plusi1 = document.getElementById('max1');

document.getElementById('max').addEventListener('click', () => {
  plusi.style.display="none";
  mini.style.display="initial";
  manucontain.style.maxHeight="250px";
  mini1.style.display="none";
  plusi1.style.display="initial";
  ship_retu.style.maxHeight="10px";


});
document.getElementById('mini').addEventListener('click', () => {
  mini.style.display="none";
  plusi.style.display="initial";
  manucontain.style.maxHeight="10px";
});
var c= 0;
mcon.addEventListener('click',()=>{
if(c == 0)
{
  plusi.style.display="none";
  mini.style.display="initial";
  manucontain.style.maxHeight="250px";
  mini1.style.display="none";
  plusi1.style.display="initial";
  ship_retu.style.maxHeight="10px";
  c++;
}else{
  mini.style.display="none";
  plusi.style.display="initial";
  manucontain.style.maxHeight="10px";
  c--
}
});
document.getElementById('max1').addEventListener('click', () => {
  plusi1.style.display="none";
  mini1.style.display="initial";
  ship_retu.style.maxHeight="1200px";
  mini.style.display="none";
  plusi.style.display="initial";
  manucontain.style.maxHeight="10px";


});
document.getElementById('mini1').addEventListener('click', () => {
  
  mini1.style.display="none";
  plusi1.style.display="initial";
  ship_retu.style.maxHeight="10px";

});
var c= 0;
srpo.addEventListener('click',()=>{
if(c == 0)
{
  mini.style.display="none";
  plusi.style.display="initial";
  manucontain.style.maxHeight="10px";
  plusi1.style.display="none";
  mini1.style.display="initial";
  ship_retu.style.maxHeight="1200px";
  c++;
}else{
  mini1.style.display="none";
  plusi1.style.display="initial";
  ship_retu.style.maxHeight="10px";
  c-- 
}
});
const zoom =  document.getElementById('image_show');

const zoom_con = document.getElementById('slides_img');

    photo.forEach((url,index) => {
   
        let img = document.createElement('img');
        img.src = url;   
        simg_con1.appendChild(img);

        img.addEventListener('click',() => {
        zoom.style.display='initial'
      });
        let dot = document.createElement('span');
        dot.classList.add('dot');
        dot.setAttribute('data-index', index);
        dotsContainer.appendChild(dot);
      
    });
    const dots = document.querySelectorAll('.dot');
    dots[0].classList.add('active');

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
          const index = parseInt(dot.getAttribute('data-index'));
          scrollToSlide(index);
      });
  });
  simg_con1.addEventListener('scroll', synchronizeDots);
  function scrollToSlide(index) {
    const slides = simg_con1.querySelectorAll('img');
    const totalSlides = slides.length;
    const slideHeight = slides[0].offsetHeight + 10; 

    simg_con1.scrollTo({
        top: index * slideHeight,
        behavior: 'smooth'
    });


    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

photo1.forEach((url) => {
   
  let img = document.createElement('img');
  img.src = url;   
  zoom_con.appendChild(img);

});
function synchronizeDots() {
  const slides = simg_con1.querySelectorAll('img');
  const slideHeight = slides[0].offsetHeight + 1;
  const scrollPosition = simg_con1.scrollTop;

  const activeIndex = Math.floor(scrollPosition / slideHeight);

  dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === activeIndex);
  });
}
/*
let currentIndex = 0;
            let intervalTime = 3000; 

            let interval = setInterval(() => {
                currentIndex = (currentIndex + 1) % photo.length;
                scrollToSlide(currentIndex);
            }, intervalTime);


simg_con1.addEventListener('mouseenter', () => {
  clearInterval(interval);
});

// Resume the interval on mouseleave
simg_con1.addEventListener('mouseleave', () => {
  interval = setInterval(() => {

      currentIndex = (currentIndex + 1) % photo.length;
      scrollToSlide(currentIndex);
  }, intervalTime);
});*/







const lbtn = document.getElementById('l1');
const rbtn = document.getElementById('l2');

lbtn.addEventListener('click', () => [
window.location.href='signin.html'
]);
rbtn.addEventListener('click', () => [
  window.location.href='signin.html'
]);








}

});
//recommended product

const flatter = data.charAt(0);



function fetchProductsByFirstLetter(letter) {
  const productsRef = ref(db, 'Products');
  return get(productsRef).then((snapshot) => {
    const products = snapshot.val();
    if (!products) return []; // Return an empty array if no products exist

    // Filter products whose IDs start with the specified letter
    const filteredProducts = Object.keys(products)
      .filter(productId => productId.startsWith(letter))
      .map(productId => products[productId]);

    return filteredProducts;
  });
}
fetchProductsByFirstLetter("F")
  .then(products => {
    products.forEach(product => {
      console.log("Product ID:", ); // Example: accessing product ID
      console.log("Product Name:", product.p_id); // Example: accessing product name
     
    });
  })
  .catch(error => {
   
  });
  
          
      
  

 




});






