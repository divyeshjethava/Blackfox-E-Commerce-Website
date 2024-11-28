import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { getDatabase, ref ,set, get,child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

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


const signingBtn = document.getElementById('signin');
const loginBtn = document.getElementById('login1');
const e1 = document.getElementById("error");
const e2 = document.getElementById("error1");
const e3 = document.getElementById("error2");
const e4 = document.getElementById("error3");
const Rname = document.getElementById('Rname');
const Rmoble = document.getElementById('Rmobile');
const Remail = document.getElementById('Remail');
const Rpassword = document.getElementById('Rpassword');
const lmobile = document.getElementById('lmobile');
const lpassword = document.getElementById('lpassword');

const container = document.getElementById('container');
const vid1 = document.getElementById('vid1')
const vid2 = document.getElementById('vid')





const currentDate = new Date();


const day = currentDate.getDate();
const monthIndex = currentDate.getMonth();
const year = currentDate.getFullYear();


const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
];


const monthName = monthNames[monthIndex];


function getOrdinalSuffix(day) {
    if (day >= 11 && day <= 13) {
        return `${day}th`;
    }
    switch (day % 10) {
        case 1:
            return `${day}st`;
        case 2:
            return `${day}nd`;
        case 3:
            return `${day}rd`;
        default:
            return `${day}th`;
    }
}


const formattedDate = `${getOrdinalSuffix(day)} ${monthName} ${year}`;

var phonePattern = /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/;

const emailPattern =/^[a-zA-Z0-9._%+-]+@gmail\.com$/;

signingBtn.addEventListener("click",function(){

 if (Rname.value.trim() === "") {

alert('username is required');

 }
 else if (!/^[A-Z]/.test(Rname.value.trim())) {
  alert('Username must start with a capital letter');
}
 else if(Rmoble.value.trim() === ""){
   alert('Mobile Number is required');

 }
 else if (Rmoble.value.trim().length !== 10) {
  alert('Mobile Number must be 10 digits');
 }
 else if (/^0+$/.test(Rmoble.value)) {
  alert('Mobile Number cannot consist of all 0s');
}

 else if (Rmoble.value.charAt(0) === '0') {
  alert('Mobile Number cannot start with 0');
}

 else if(Remail.value.trim() === ""){
   alert('Emails address is required');
 }
 else if (phonePattern.test(Remail.value)) {
  alert('Email address cannot contain a phone number');
}
else if (!emailPattern.test(Remail.value.trim())) {
  alert('Invalid Email address');
} 
 else if(Rpassword.value.trim() === ""){
   alert('Password is required');
 }

 else{
   const pro1 = ref(db,'user_master/'+ Rmoble.value);
 
   const result = {
   email:Remail.value,
   name:Rname.value,
   password:Rpassword.value,
   phone:Rmoble.value,
   registerdate:formattedDate
   
   };
    
    set(pro1,result)
    .then(() => {
      alert('registration successfully');
      container.classList.add('active');
     });
 }
});
var mbl ;
var ps ;
let userData1 = [];
const pro = ref(db,'user_master/');


get(pro).then(snapshot => {
  snapshot.forEach(function(childSnapshot) {
      userData1.push(childSnapshot.val());
      
  });
loginBtn.addEventListener("click",function(){

  const lmobileValue = lmobile.value.trim();
  const lpasswordValue = lpassword.value.trim();


  if (lmobileValue === "") {
    alert('Mobile number is required');
} else if (lpasswordValue === "") {
    alert('Password is required');
} else {
 
 
  const user = userData1.find(user => String(user.phone).trim() === lmobileValue && user.password === lpasswordValue);

  if (user) {
      localStorage.setItem('phoneNumber', lmobileValue);
      window.location.href = 'home.html';
  } else {
      alert('Invalid mobile number or password');
  }
}
})
})

var direction = 1; 
var maxX = 200; 
var interval = 10; 
var step = 1;

