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
 const men = document.getElementById('men');
 const women = document.getElementById('women');
 const contact = document.getElementById('CONTACT')
  const p_container = document.getElementById('catemen');
  const p_container1 = document.getElementById('catemen1');
  const p_container2 = document.getElementById('catemen2');
  const popular_mostref = ref(db, 'sub_cat/' + 'MEN');
  const popular_mostref1 = ref(db, 'sub_cat/' + 'WOMEN');
  const footercatmen = document.getElementById('mesData');
  const footercatmen1 = document.getElementById('mesData1');


get(popular_mostref).then((snapshot) => {
  if(snapshot.exists()){
    
    snapshot.forEach((childSnapshot) => {
        const s_image = childSnapshot.child('s_image').val();
        const s_name = childSnapshot.child('s_name').val();

        const div1 = document.createElement('div');
        const img = document.createElement('img');
        const name = document.createElement('span');
        img.src=s_image;
        name.textContent=s_name;

        div1.classList.add('mendiv1');

        div1.appendChild(img);
        div1.appendChild(name);
       footercatmen1.appendChild(div1);
      
       div1.addEventListener('click',() => {
        window.location.href='headcat.html?cnm='+s_name;
       });

       men.addEventListener('mouseover', () => {
        p_container.classList.add('mencat');
    });

    p_container.addEventListener('mouseover', () => {
        p_container.classList.add('mencat');
    });

    men.addEventListener('mouseout', (event) => {

            p_container.classList.remove('mencat');
        
    });
  p_container.addEventListener('mouseout', (event) => {

            p_container.classList.remove('mencat');
        
    });
  

    })

}

})

//woman

get(popular_mostref1).then((snapshot) => {
    if(snapshot.exists()){
      
      snapshot.forEach((childSnapshot) => {
          const s_image = childSnapshot.child('s_image').val();
          const s_name = childSnapshot.child('s_name').val();
  
          const div1 = document.createElement('div');
          const img = document.createElement('img');
          const name = document.createElement('span');
          img.src=s_image;
          name.textContent=s_name;
  
          div1.classList.add('mendiv1');
  
          div1.appendChild(img);
          div1.appendChild(name);
         p_container1.appendChild(div1);
         div1.addEventListener('click',() => {
          window.location.href='headcat.html?cnm='+s_name;
         });
      
    
  
      })
  
  }
  
  })
  women.addEventListener('mouseover', () => {
    p_container1.classList.add('mencat1');
});

p_container1.addEventListener('mouseover', () => {
    p_container1.classList.add('mencat1');
});

women.addEventListener('mouseout', (event) => {

        p_container1.classList.remove('mencat1');
    
});
p_container1.addEventListener('mouseout', (event) => {

        p_container1.classList.remove('mencat1');
    
});

//contact us

contact.addEventListener('mouseover', () => {
    p_container2.classList.add('mencat2');
});

p_container2.addEventListener('mouseover', () => {
    p_container2.classList.add('mencat2');
});

contact.addEventListener('mouseout', (event) => {

        p_container2.classList.remove('mencat2');
    
});
p_container2.addEventListener('mouseout', (event) => {

        p_container2.classList.remove('mencat2');
    
});

// for footer

get(popular_mostref1).then((snapshot) => {
    if(snapshot.exists()){
      
      snapshot.forEach((childSnapshot) => {
          const s_image = childSnapshot.child('s_image').val();
          const s_name = childSnapshot.child('s_name').val();
  
          const div1 = document.createElement('div');
          const img = document.createElement('img');
          const name = document.createElement('span');
          img.src=s_image;
          name.textContent=s_name;
  
          div1.classList.add('mendiv1');
          img.classList.add('fimg');
          div1.appendChild(img);
          div1.appendChild(name);
         footercatmen.appendChild(div1);
         div1.addEventListener('click',() => {
          window.location.href='headcat.html?cnm='+s_name;
         });
      
    
  
      })
  
  }
  
  })


  get(popular_mostref).then((snapshot) => {
    if(snapshot.exists()){
      
      snapshot.forEach((childSnapshot) => {
          const s_image = childSnapshot.child('s_image').val();
          const s_name = childSnapshot.child('s_name').val();
  
          const div1 = document.createElement('div');
          const img = document.createElement('img');
          const name = document.createElement('span');
          img.src=s_image;
          name.textContent=s_name;
  
          div1.classList.add('mendiv1');
  
          div1.appendChild(img);
          div1.appendChild(name);
         p_container.appendChild(div1);
        
         div1.addEventListener('click',() => {
          window.location.href='headcat.html?cnm='+s_name;
         });
  
         men.addEventListener('mouseover', () => {
          p_container.classList.add('mencat');
      });
  
      p_container.addEventListener('mouseover', () => {
          p_container.classList.add('mencat');
      });
  
      men.addEventListener('mouseout', (event) => {
  
              p_container.classList.remove('mencat');
          
      });
    p_container.addEventListener('mouseout', (event) => {
  
              p_container.classList.remove('mencat');
          
      });
    
  
      })
  
  }
  
  })