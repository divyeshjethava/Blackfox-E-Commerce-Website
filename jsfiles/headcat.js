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

  const urlParams = new URLSearchParams(window.location.search);
    const cnm = urlParams.get('cnm');
    const p_container = document.getElementById('catcontainer');
    const cattitle  = document.getElementById('cattitle');

    const popular_mostref = ref(db, 'Woman/' + cnm );

      cattitle.textContent='Womens  '+''+cnm;
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
