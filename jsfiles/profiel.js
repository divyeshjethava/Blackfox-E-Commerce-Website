import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { getDatabase, ref ,set, get,child,update,orderByChild,query,equalTo,onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

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

  const yname = document.getElementById('unames');
  const yemail = document.getElementById('ueadd');
  const yphone = document.getElementById('udphone');
  const ygender = document.getElementById('Gender');
  const yimg = document.getElementById('uimges');
  const yimgin = document.getElementById('userimg');
  const cancelbtn = document.getElementById('cns');
  const yupbtn = document.getElementById('pbtn');


const edit = document.getElementById('edit_pro');
const pro_conte = document.getElementById('profile_1');
edit.addEventListener('click', () => {
    pro_conte.classList.add('zoomed');
   
});

cancelbtn.addEventListener('click', () => {
    pro_conte.classList.remove('zoomed');
});




var phoneNumber1 = localStorage.getItem('phoneNumber');

yimgin.addEventListener('change',function(e){
  
      var file=e.target.files[0];
      yimg.src=URL.createObjectURL(yimgin.files[0]);
  

      const metadata = {
        contentType: 'image/jpeg'
      };
      const storageRef = sRef(storage,'users/'+ phoneNumber1);
      
      
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);
      uploadTask.on('state_changed',
      (snapshot) => {
       
        });
     
      
  });

const name = document.getElementById('uname');
const email = document.getElementById('Email');
const phone = document.getElementById('PhoneU');
const gender = document.getElementById('genders');
const address1 = document.getElementById('addreci');
const rdate = document.getElementById('rdate');
const images = document.getElementById('userPro');
const pincode1 = document.getElementById('pincode');
const city  = document.getElementById('ucity');
const state = document.getElementById('state');
const country = document.getElementById('contry');
const address = document.getElementById('resiadre');


function getPinCodeInfo() {
  const pincodes = document.getElementById('pincode').value;
 
  
  if (pincodes === '') {
      alert('Please enter a valid pin code.');
      return;
  }

  const apiUrl = `https://api.postalpincode.in/pincode/${pincodes}`;
 
  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {


          if (data.error) {
              alert('some error in picode check it.');
          } else {
              city.value= data[0].PostOffice[0].Block;
              state.value = data[0].PostOffice[0].State;
             country.value='India'

          
          }
       
      })
      
}

pincode1.addEventListener('change',() => {
  getPinCodeInfo();
})


 function userData1(name1,email1,phone1,gender1,image1,rdate1,zipc,cty,stst,conry,addresss){
    yname.value = name1;
    yemail.value = email1;
    yphone.value = phone1;
    ygender.value = gender1; 
    pincode1.value=zipc;
    city.value= cty;
    country.value = conry;
    state.value = stst;
    address.value=addresss
    if(ygender.value === 'undefined')
    {
        ygender.value = "";
    }
    yimg.src = image1;
    if (typeof image1 === 'undefined' || image1 === null) {
        yimg.src = "images/pro1-removebg-preview.png";
    }
    name.textContent=name1;
    email.textContent=email1;
    phone.textContent=phone1;
    gender.textContent=gender1;
    rdate.textContent=rdate1;
   images.src=image1;
   address1.textContent=addresss + ' , '+zipc +' , '+cty+' ,'+stst+' , '+conry;


   if(city.value === 'undefined')
   {
       city.value = "";
   }
   if(country.value === 'undefined')
   {
       country.value = "";
   }
   if(state.value === 'undefined')
   {
       state.value = "";
   }
   if(address.value === 'undefined')
   {
       address.value = "";
   }
   if(pincode1.value === 'undefined')
   {
       ygender.value = "";
   }
 }
 function alluserdata(userData){
 
     userData.forEach(element => {
    
       userData1(element.name,element.email,element.phone,element.gender,element.image,element.registerdate,element.zipcode,element.city,element.state,element.country,element.address);
     });
   }
   
   function getdataProduct() {
   
    
     const pro1 = ref(db,'user_master/'+ phoneNumber1);
     get(pro1).then((snapshot) => {
           
       var userData = [];
       userData.push(snapshot.val());
      
       
       alluserdata(products);
     });
   
   }
   function getdatarealtime() {
   
    
     const pro1 = ref(db,'user_master/'+ phoneNumber1);
     onValue(pro1,(snapshot)=>{
                      
       var userData = [];
       userData.push(snapshot.val());
     
       alluserdata(userData);
     })
   
   }

   getdatarealtime();
   yupbtn.addEventListener('click',() => {
    const storageRef = sRef(storage,'users/'+ phoneNumber1);
    const pro1 = ref(db,'user_master/'+ phoneNumber1);
  getDownloadURL(storageRef).then((url) => {
    const result = {
        email:yemail.value,
        name:yname.value,
        phone:yphone.value,
        gender:ygender.value,
        image:url,
        zipcode:pincode1.value,
        city:city.value,
        country:country.value,
        state:state.value,
        address:address.value
       
    
        };
         
         update(pro1,result)
         .then(() => {

            pro_conte.classList.remove('zoomed');
         
          });
  });
   
});
















