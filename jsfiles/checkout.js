import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { getDatabase, ref ,set, get,child,update,orderByChild,query,equalTo,onValue,remove} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

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



const circle = document.querySelectorAll('.circle'),
progress1 = document.querySelector('.indicator'),
btn1 = document.getElementById('nexts'),
btn2 = document.getElementById('nexts1'),
btn3 = document.getElementById('nexts2'),
d_con = document.getElementById('shop__d'),
pay_con = document.getElementById('pay_con'),
summry = document.getElementById('summry');

let currentStep =1 ;


function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

const randomString = generateRandomString(12); 
function getCurrentDate() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // January is 0, so we add 1
    const year = currentDate.getFullYear();
    return `${day}.${month}.${year}`;
}







function getCurrentTime() {
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

const formattedTime = getCurrentTime();



const urlParams = new URLSearchParams(window.location.search);
const tprice = urlParams.get('tp');





var phoneNumber1 = localStorage.getItem('phoneNumber');
const name = document.getElementById('Names'),
phone = document.getElementById('mobils'),
adds = document.getElementById('addresss'),
city1 = document.getElementById('citys'),
state = document.getElementById('states'),
pincode = document.getElementById('pincodes');

function userData1(name1,phone1,zipc,cty,stst,addresss){
    name.value = name1
    phone.value =phone1
    adds.value = addresss
    city1.value = cty
    pincode.value = zipc
    state.value = stst 
 }
 function alluserdata(userData){
 
     userData.forEach(element => {
    
       userData1(element.name,element.phone,element.zipcode,element.city,element.state,element.address);
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
   const pro1 = ref(db, 'bag/' + phoneNumber1);
   const i_cons = document.getElementById('i_consw');
   get(pro1).then((snapshot) => {
       const userData1 = snapshot.val(); 
   
       for (const key in userData1) {
           if (userData1.hasOwnProperty(key)) {
               const coverImage = userData1[key].cover_image; 
   
          
               const img = document.createElement('img');
               img.src = coverImage;
   
               
               i_cons.appendChild(img);
           }
       }
   });


 
function getPinCodeInfo() {
    const pincodes = document.getElementById('pincodes').value;
   
    
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
                city1.value= data[0].PostOffice[0].Block;
                state.value = data[0].PostOffice[0].State;
            
  
            
            }
         
        })
        
  }
  
  pincode.addEventListener('change',() => {
    getPinCodeInfo();
  })


  btn1.addEventListener('click', (e) => {
    
    if (e.target.id === 'nexts' && currentStep < circle.length) {
        currentStep = 2;
       

      
       const pro2 = ref(db,'user_master/'+ phoneNumber1);
       const orderRef = ref(db, 'order_master/' + randomString)
       const formattedDate = getCurrentDate();
   const result = {
    
    name:name.value,
    phone:phone.value,
    zipcode:pincode.value,
    city:city1.value,
    state:state.value,
    address:adds.value
   

    };
    
     update(pro2,result).then(() => {
   
        pay_con.classList.add('actives');
        
     })

     
       
    } 
    progress1.style.width = `${((currentStep - 1) / (circle.length - 1)) * 100}%`;
   
    circle.forEach((circles, index) => {
        const action = index < currentStep ? 'add' : 'remove';
        circles.classList[action]('active');
    });
   
});





















  const user1 = ref(db, 'user_master/' + phoneNumber1);
  const payRef = ref(db, 'payment_master/' + randomString);
  const button = document.getElementById('upid1');
  const cb = "Card Number is Required";
  document.getElementById('odid').textContent ="Order id is"+ ' ' + "#"+randomString
  get(user1)
  .then((snapshot) => {
    if (snapshot.exists()) {
      const userData = snapshot.val();
  
    
    document.getElementById('nexts1').addEventListener('click', function (e) {

        
    
    
        const number= document.getElementById('cardnumber'),
        name2 =  document.getElementById('Cardname'),
        expiry =  document.getElementById('edate'),
        cvv= document.getElementById('cvv')

      
    const date = new Date();
    const formattedDate = getCurrentDate();
        var rzp = new Razorpay({
            key: 'rzp_test_5TGRS6ImN05hvn', 
            name: 'Blackfox - The Fashion Studio ',
            description: 'Payment for Products',
            image: 'https://firebasestorage.googleapis.com/v0/b/blackfox-the-fashion-stu-c124e.appspot.com/o/blacklogo.png?alt=media&token=47fa8e6c-bfbb-4194-af95-c499d9fca0eb',
            amount: tprice+0+0,
            
            handler: function (response) {
               
               const result ={
                mobile:userData.phone,
                paymet_id:response.razorpay_payment_id,
                amount:tprice,
                name:userData.name,
                time:formattedTime,
                date:formattedDate

               }

               const orderRef = ref(db, 'order_master/' + randomString)
            
               
                set(payRef,result).then(() => {
                    const pro1 = ref(db, 'bag/' + phoneNumber1);
   
                    get(pro1).then((snapshot) => {
                        const userData1 = snapshot.val(); 
                        const result1 = {
                            order_date:formattedDate,
                            order_id:randomString,
                            order_price:tprice,
                            order_status:1,
                            order_time:formattedTime,
                            order_u_address:adds.value,
                            order_u_city:city1.value,
                            order_u_name:name.value,
                            order_u_phone:phone.value,
                            order_u_state:state.value,
                            order_u_zipcode:pincode.value,
                            order_prod:userData1
                                  
                               
                         };
                        set(orderRef,result1).then(() => {

                            remove(pro1).then(()=>{
                               
                            });
                            if (e.target.id === 'nexts1' && currentStep < circle.length) {
                                currentStep = 3
                              
                                summry.classList.add('actives');
                                alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
                            }
                            
                            progress1.style.width = `${((currentStep - 1) / (circle.length - 1)) * 100}%`;
                            circle.forEach((circles, index) => {
                                const action = index < currentStep ? 'add' : 'remove';
                                circles.classList[action]('active');
                            });
                        })
                    
                    });
                   
                })


            },
            
            prefill: {
                    name:userData.name,
                    email: userData.email,
                    contact: userData.phone   
            },
          
            theme: {
                color: '#000000', 
                background: '#FFFFFF', // White color for background
                card: {
                    number: {
                        color: '#000000' // Black color for card number text
                    },
                    expiry: {
                        color: '#000000' // Black color for expiry text
                    },
                    cvv: {
                        color: '#000000' // Black color for CVV text
                    },
                    postal_code: {
                        color: '#000000' // Black color for postal code text
                    }
                }
            }
        });
        const cardNumber = number.value.replace(/\D/g, '');
        if(number.value === ''){
            number.placeholder = cb
        }else if(cardNumber.length !== 16){
            number.value = 'Card Number Is invalid OR Card Number Must be 16 Digit'
        }else if(name2.value === ''){
            name2.placeholder = 'Card Holder Name Is Required';
        }else if(expiry.value === ''){
           expiry.placeholder = 'Card Expiry Date is Required';
        }else if(cvv.value === ''){
           cvv.placeholder = "CVV is Required"
        }else{
            rzp.open();
        }
       
    });
    













    button.addEventListener('click',(e) => {
        var cardDetails = {
            number: document.getElementById('cardnumber').value,
            name: document.getElementById('Cardname').value,
            expiry: document.getElementById('edate').value,
            cvv: document.getElementById('cvv').value
        };
    
    const date = new Date();
    const formattedDate = getCurrentDate();
        var rzp = new Razorpay({
            key: 'rzp_test_5TGRS6ImN05hvn', 
            name: 'Blackfox - The Fashion Studio ',
            description: 'Payment for Products',
            image: 'https://firebasestorage.googleapis.com/v0/b/blackfox-the-fashion-stu-c124e.appspot.com/o/blacklogo.png?alt=media&token=47fa8e6c-bfbb-4194-af95-c499d9fca0eb',
            amount: tprice+0+0,
            handler: function (response) {
               
               const result ={
                mobile:userData.phone,
                paymet_id:response.razorpay_payment_id,
                amount:tprice,
                name:userData.name,
                time:formattedTime,
                date:formattedDate

               }

               const orderRef = ref(db, 'order_master/' + randomString)
            
               
                set(payRef,result).then(() => {
                    const pro1 = ref(db, 'bag/' + phoneNumber1);
   
                    get(pro1).then((snapshot) => {
                        const userData1 = snapshot.val(); 
                        const result1 = {
                            order_date:formattedDate,
                            order_id:randomString,
                            order_price:tprice,
                            order_status:1,
                            order_time:formattedTime,
                            order_u_address:adds.value,
                            order_u_city:city1.value,
                            order_u_name:name.value,
                            order_u_phone:phone.value,
                            order_u_state:state.value,
                            order_u_zipcode:pincode.value,
                            order_prod:userData1
                                  
                               
                         };
                        set(orderRef,result1).then(() => { 
                           remove(pro1).then(()=>{
                            summry.classList.add('actives');
                           });
                              
                          
                        })
                    
                    });
                   
                })


            },
            
            prefill: {
                    name:userData.name,
                    email: userData.email,
                    contact: userData.phone   
            },
          
            theme: {
                color: '#000000', 
                background: '#FFFFFF', // White color for background
                card: {
                    number: {
                        color: '#000000' // Black color for card number text
                    },
                    expiry: {
                        color: '#000000' // Black color for expiry text
                    },
                    cvv: {
                        color: '#000000' // Black color for CVV text
                    },
                    postal_code: {
                        color: '#000000' // Black color for postal code text
                    }
                }
            }
        });
    
      
        rzp.open();
                             
                             
        currentStep = 3;
        progress1.style.width = `${((currentStep - 1) / (circle.length - 1)) * 100}%`;
        circle.forEach((circles, index) => {
            const action = index < currentStep ? 'add' : 'remove';
            circles.classList[action]('active');
        });

    });










    }

  })
 
