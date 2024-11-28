import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { getDatabase, ref ,set, get,child,remove,update } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

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

  function fetchDataInslider() {
   
      const adids = ['1', '2', '3', '4'];
      adids.forEach(adid => {
        const subCatRef = ref(db, 'Advertiesement/' + adid );
  
        get(subCatRef).then((snapshot) => {
          const data = snapshot.val();
          if (data) {
          
            populateSlider(data);
          }
        });
      });
    
  
  }
 function populateSlider(data) {
  const container = document.getElementById("item_0");
  const tinfocontain = document.querySelector('.info')

    const img = document.createElement('img');
    const title = document.createElement('h1');
    
    img.classList.add('slid');
    
    img.src = data.image;
    title.textContent = data.title; 
  

  
    // Append slide to slider
    container.appendChild(img);
   tinfocontain.appendChild(title);
   
  }
  /*function populte() {
    const container = document.getElementById("item_0");
    const adids = ['1', '2', '3', '4'];

    adids.forEach(adid => {
        const subCatRef = ref(db, 'Advertiesement/' + adid + '/image');
        get(subCatRef).then((snapshot) => {
            const imageURL = snapshot.val();
         
                const img = document.createElement('img');
                img.classList.add('slid')
                img.src = imageURL;
                container.appendChild(img);
           
        })
       
    });


    // Start the slider after all media elements are appended
  
}*/
function startSlider() {
    const sliderContainer = document.getElementById('slid-contaner');
    const slides = document.querySelector('.slider').children;
    const slides1 = document.querySelector('.info').children;
    
    let slideIndex = 0;
  
    setInterval(() => {
      for (let i = 0; i < slides.length && i < slides1.length; i++) {
        slides[i].classList.remove('active');
        slides1[i].classList.remove('active');

      }

          
      slideIndex = (slideIndex + 1) % slides.length;
      
    slides[slideIndex].classList.add('active');
    slides1[slideIndex].classList.add('active');

    },5000);
  }
function startSlidertitle(){
  const slides = document.querySelector('.info');
    
    let slideIndex = 0;
  
    setInterval(() => {
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
      }

          
      slideIndex = (slideIndex + 1) % slides.length;
      
    slides[slideIndex].classList.add('active');
    },5000);
}


fetchDataInslider();

startSlider();
//for popular products

const pop_container = document.getElementById('pop1');
const popular_proref = ref(db, 'Products/' );

const bicon = document.createElement('i');
  bicon.classList.add('fa','fa-angle-left');
  bicon.classList.add('bicon');
  pop_container.appendChild(bicon);
get(popular_proref).then((snapshot) => {
if(snapshot.exists()){
  
  snapshot.forEach((childSnapshot) => {
    const cover_img = childSnapshot.child('cover_image').val();
   
    const pop_img = document.createElement('img');
    pop_img.src = cover_img;
    pop_container.appendChild(pop_img);

  })
}

})
const nicon = document.createElement('i');
  nicon.classList.add('fa','fa-angle-right');
  pop_container.appendChild(nicon);
  nicon.classList.add('nicon');
  const imageWidth = 380;

  bicon.addEventListener('click',() =>{
    pop_container.style.scrollBehavior = 'smooth';
    pop_container.scrollLeft -= imageWidth * 2;
 if (pop_container.scrollLeft >= pop_container.scrollWidth - pop_container.offsetWidth) {
  pop_container.scrollLeft = 0;
}
  })
  nicon.addEventListener('click',() =>{
    pop_container.scrollLeft += imageWidth * 2;
    pop_container.style.scrollBehavior = 'smooth';
    
    if (pop_container.scrollLeft < 0) {
      pop_container.scrollLeft = pop_container.scrollWidth - pop_container.offsetWidth;
    }
 
  })
  pop_container.addEventListener('wheel',(e) => {
    if (window.innerWidth > 768) { 
      e.preventDefault();
      pop_container.scrollLeft += e.deltaX;
      pop_container.style.scrollBehavior = 'auto';
  }
    e.preventDefault();
    pop_container.scrollLeft += e.deltaX;
    pop_container.style.scrollBehavior = 'auto';
  });



const header = document.getElementById('head');

function HeaderBackground() {
  if (window.scrollY > 700) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', HeaderBackground);

//for most popular products

const p_container = document.getElementById('product_container');
const psi_con = document.getElementById('sp_imge');


const popular_mostref = ref(db, 'Products/' );


get(popular_mostref).then((snapshot) => {
  if(snapshot.exists()){
    
    snapshot.forEach((childSnapshot) => {
     
      const cover_img = childSnapshot.child('cover_image').val();
      const Pro_name = childSnapshot.child('p_name').val();
      const Pro_price = childSnapshot.child('price').val();
     const P_id = childSnapshot.child('p_id').val();
    const qtty = childSnapshot.child('quantity').val();
    const clr = childSnapshot.child('colorname').val();
    const f_status = childSnapshot.child('f_status').val();
      const prs = document.createElement('div');
      prs.classList.add('prise');
      const con_child = document.createElement('div');
      const child_p_container = document.createElement('div');
      child_p_container.classList.add('child-con');
      const pop_img = document.createElement('img');
      const p_name1 = document.createElement('span');
      const p_price = document.createElement('h3');
      const overlay = document.createElement('div');
      const like  = document.createElement('i');
      like.classList.add("far", "fa-heart");
    con_child.classList.add('main_con');
      const iconContainer = document.createElement('div');
      const i2 = document.createElement('i');
      const i = document.createElement('i');
      i.classList.add('fa-solid', 'fa-cart-shopping');
      i.classList.add('cart');
   i2.innerHTML="&#8377;";

   i2.classList.add('i2');
   p_price.classList.add('prices');
      iconContainer.appendChild(i);
      iconContainer.classList.add('icon-container');
      overlay.classList.add('overlayp');
      like.classList.add('like')
      p_name1.textContent = Pro_name;
      p_price.textContent = Pro_price;
      pop_img.src = cover_img;
      child_p_container.appendChild(pop_img);
    child_p_container.appendChild(like)
      child_p_container.appendChild(overlay);
  
      child_p_container.appendChild(iconContainer);
      con_child.appendChild(child_p_container);
      con_child.appendChild(p_name1);
      prs.appendChild(i2);
      prs.appendChild(p_price);
like.setAttribute('id','like');
      con_child.appendChild(prs);
      var phoneNumber1 = localStorage.getItem('phoneNumber');
  const popular_mostref3 = ref(db, 'wishlist/' + phoneNumber1 + '/' + P_id );
  var c = 0;
  const updateRef = ref(db, 'Products/' + P_id );
like.addEventListener('click',()=>{
 
  if (c == 0) {
    set(popular_mostref3,({
      cover_image:cover_img,
              f_status:1,
              p_name:Pro_name,
              p_price:Pro_price,
              p_id:P_id,
              quantity:qtty,
              color:clr
     })).then( () => {
      like.classList.remove("far", "fa-heart"); 
      like.classList.add("fas", "fa-heart");
      c++;
     });
  
     update(updateRef, {
       "f_status":1
       })
    

   
} else if (c == 1) {
 

  update((updateRef),{
    f_status:0
   })
  remove(popular_mostref3)
  .then(() => {
    like.classList.remove("fas", "fa-heart");
    like.classList.add("far", "fa-heart");
    c--;
})
   
}

});




  if (f_status === 1) {

   like.classList.remove("far", "fa-heart"); 
   like.classList.add("fas", "fa-heart");

   }else{
        like.classList.remove("fas", "fa-heart");
        like.classList.add("far", "fa-heart");
  }
        
    


      overlay.addEventListener('click', () => {

        window.location.href = 'proDeatils.html?id='+P_id;
      });

      p_container.appendChild(con_child);

      
   
  i.addEventListener('click', () => {
    window.location.href = 'proDeatils.html?id='+P_id;

  });
    })
  }
  
  })

  function isLoggedIn(phoneNumber) {
    return database.ref('user_master/' + phoneNumber).once('phone').then(function(snapshot) {
        return snapshot.exists();
    });
}
const add_cont2 = document.getElementById('adcrt');

window.onload = function() {
  var phoneNumber = localStorage.getItem('phoneNumber');
  if (!phoneNumber) {
    setTimeout(function() {
      document.getElementById('adcrtcon').style.display = 'block';
  }, 10000);
   
  }
};

const closea = document.getElementById('close');
closea.addEventListener('click',() => {
  
  document.getElementById('adcrtcon').style.display = 'none';
})
const lbtn = document.getElementById('l1');
const rbtn = document.getElementById('l2');

lbtn.addEventListener('click', () => [
window.location.href='signin.html'
]);
rbtn.addEventListener('click', () => [
  window.location.href='signin.html'
]);


if (!localStorage.getItem('visitorCount')) {
 
  localStorage.setItem('visitorCount', '1');
} else {
  
  let count = parseInt(localStorage.getItem('visitorCount'), 10);
  count++;
  localStorage.setItem('visitorCount', count.toString());
}



