import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { getDatabase, ref ,set, get,child,remove,update,orderByChild,query,equalTo } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

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

const result_contaner = document.getElementById('result_container');
const searchi = document.getElementById('search');
const sinput = document.getElementById('sinput');
const indianRupeeSymbol = '\u20B9';
const sinput1 = document.getElementById('sinput1');
console.log(indianRupeeSymbol)
searchi.addEventListener('click', () => {
      
        window.location.href='seachresult.html'
      });

sinput1.addEventListener('input', (event) => {
    
    const query = event.target.value.trim();
    if (query !== '') {
      search({ p_name: query, tag: "#"+query, price: query });
    } else {
      clearResultsContainer(); 
    }
});

function search(searchCriteria) {
  const dbRef = ref(db, 'Products/');

  // Clear the container before starting the search
  clearResultsContainer();

  // Fetch all products from the database
  get(dbRef)
      .then((snapshot) => {
          const results = [];
          snapshot.forEach((childSnapshot) => {
              const product = childSnapshot.val();
              if (matchesCriteria(product, searchCriteria)) {
                  results.push(product);
              }
          });
          displayResults(results);
      })
      .catch((error) => {
          console.error("Error fetching data:", error);
      });
}

function matchesCriteria(product, searchCriteria) {
  for (const field in searchCriteria) {
      if (product[field] && product[field].toLowerCase().includes(searchCriteria[field].toLowerCase())) {
          return true; // If any field matches, return true
      }
  }
  return false; // If no field matches, return false
}
const stext = document.getElementById('pop');

function clearResultsContainer() {
  
  while (result_contaner.firstChild) {
      result_contaner.removeChild(result_contaner.firstChild);
  }
}



function displayResults(results) {
  clearResultsContainer();
    if (results.length === 0) {
     stext.textContent = 'No results found'
   
      
    } else {

        stext.textContent = 'Search Results'
      results.forEach(item => {
        const cover_img = item.cover_image
        const Pro_name = item.p_name
        const Pro_price = item.price
       const P_id = item.p_id
      const qtty = item.quantity
      const clr = item.colorname
      const f_status = item.f_status
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
        con_child.appendChild(prs)


        result_contaner.appendChild(con_child);
      });
    }
  }
  