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
  const indianRupeeSymbol = '\u20B9';

 const oref = ref(db,'order_master/');
 var phoneNumber1 = localStorage.getItem('phoneNumber');
 
get(oref).then((snapshot) => {

    const orders = snapshot.val();
    if (orders) {
      
        Object.keys(orders).forEach((orderId) => {
            const order = orders[orderId];
          const od = document.getElementById('orfss');
            if (order.order_u_phone === phoneNumber1) {

const odi = document.getElementById('oid');

                 const main_div = document.createElement('div')
                 const div0 = document.createElement('div');
                 const div1 = document.createElement('div');
                const date = document.createElement('span');
                const id = document.createElement('span');
                const titem = document.createElement('span');
                const i = document.createElement('i');
                const div3 = document.createElement('div');
                const div4 = document.createElement('div');
                const div5 = document.createElement('div');
                const div6 = document.createElement('div');
                const cancel = document.createElement('button');
                const track = document.createElement('button');


                main_div.classList.add('madis');
                div1.classList.add('dvis1');
               i.classList.add('fa-solid', 'fa-angle-down');
               div0.classList.add('dvis0');
               div3.classList.add('dvis3');
               div4.classList.add('dvis4');
               div5.classList.add('dvis5');
               div6.classList.add('dvis6');
               cancel.classList.add('cnls');
               track.classList.add('trk');


               const amountt = document.createElement('span');
               const amout = document.createElement('span');


               
               const status = document.createElement('span');
               const s_resullt = document.createElement('span');

             amout.classList.add('amt');
                date.textContent='Date: '+order.order_date;
                id.textContent = "Id : " + order.order_id;
 
                amountt.textContent="Total Amt :"
                amout.textContent = indianRupeeSymbol+order.order_price;

                const div2 = document.createElement('div');
                div2.classList.add('dvis2');
                var c= 0;
                i.addEventListener('click', () => {
                    if(c == 0){
                        i.classList.remove('fa-solid', 'fa-angle-down')
                        i.classList.add('fa-solid', 'fa-angle-up')
                        div0.classList.add('actv');
                        c++;
                    }else{
                        i.classList.remove('fa-solid', 'fa-angle-up')
                        i.classList.add('fa-solid', 'fa-angle-down')
                       
                        div0.classList.remove('actv');
                        c--; 
                    }
                
                });

                const orderRef = ref(db, 'order_master/' + order.order_id + '/order_prod');
                get(orderRef).then((snapshot) => {
                    const orderItems = snapshot.val();
                    var numberOfItems = Object.keys(orderItems).length;
                     
                    titem.textContent ='Total Items: '+numberOfItems;

                  for (const itemId in orderItems) {
                    if (Object.hasOwnProperty.call(orderItems, itemId)) {
                        const item = orderItems[itemId];

                        if (item.cover_image) {
                            const img = document.createElement('img');
                            const idiv1 = document.createElement('div');
                            const idiv2 = document.createElement('div');
                            const pname =  document.createElement('span');
                            const color = document.createElement('span');
                            const size = document.createElement('span');
                            const qty = document.createElement('span');
                            const pdiv = document.createElement('div');
                            const ptitl = document.createElement('span');
                            const price = document.createElement('span');


                            pname.classList.add('pnms');
                            color.classList.add('cols');
                            size.classList.add('cols');
                            qty.classList.add('cols');
                            price.classList.add('prco');
                            ptitl.classList.add('cols');
                            pdiv.classList.add('pdiv');

                            img.src = item.cover_image;
                            img.classList.add('orimage');
                            pname.textContent=item.p_name;
                            color.textContent = item.color;
                            size.textContent ="Size : " +item.size;
                            qty.textContent = "Qty : " + item.quantity;
                            ptitl.textContent="Price : ";
                            price.textContent=indianRupeeSymbol+item.p_price;

                            pdiv.appendChild(ptitl);
                            pdiv.appendChild(price);
                            idiv2.appendChild(pname);
                            idiv2.appendChild(color);
                            idiv2.appendChild(size);
                            idiv2.appendChild(qty);
                            idiv2.appendChild(pdiv);

                            idiv1.classList.add('idiv1');
                            idiv2.classList.add('idiv2');
                            idiv1.appendChild(img);
                            idiv1.appendChild(idiv2);
                            
                            div3.appendChild(idiv1);
                        } else {
                            console.warn("Image not found for item:", itemId);
                        }
                    }
                }

                })
    status.textContent="Status";
    cancel.textContent="Cancel Order";
    track.textContent="Track Order";
    odi.innerText="YOUR ORDER ID : "+order.order_id;

    const circle = document.querySelectorAll('.circle1')
    const progress1 = document.querySelector('.indicator1')

 const back  = document.getElementById('ich');
 back.addEventListener('click' , () => {
    od.classList.remove('act');
    document.getElementById('Tracker').classList.remove('remo');
    
 })
 let currentStep =1 ;

 track.addEventListener('click', () => {
    odi.textContent = "YOUR ORDER ID : " + order.order_id;
    document.getElementById('dod').textContent = order.order_date;
    od.classList.add('act');
    document.getElementById('Tracker').classList.add('remo');

    if (order.order_status === "1") {
        document.getElementById('conf').style.color = "black";
        document.getElementById('dod').style.color = "black";
        currentStep = 1;
        progress1.style.width = `${((currentStep - 1) / (circle.length - 1)) * 100}%`;
        circle.forEach((circles, index) => {
            const action = index < currentStep ? 'add' : 'remove';
            circles.classList[action]('active');
        });
    } else if (order.order_status === "2") {
        document.getElementById('pre').style.color = "black";
        document.getElementById('pre1').style.color = "black";
        currentStep = 2;
        const progressBarHeight = `${((currentStep - 1) / (circle.length - 1)) * 100}%`;
        progress1.style.height = progressBarHeight;
        circle.forEach((circles, index) => {
            const action = index < currentStep ? 'add' : 'remove';
            circles.classList[action]('active');
        });
    } else if (order.order_status === "3") {
        document.getElementById('ship').style.color = "black";
        document.getElementById('ship1').style.color = "black";
        currentStep = 3;
        const progressBarHeight = `${((currentStep - 1) / (circle.length - 1)) * 100}%`;
        progress1.style.height = progressBarHeight;
        circle.forEach((circles, index) => {
            const action = index < currentStep ? 'add' : 'remove';
            circles.classList[action]('active');
        });
    } else if (order.order_status === "4") {
        document.getElementById('out').style.color = "black";
        document.getElementById('out1').style.color = "black";
        currentStep = 4;
        const progressBarHeight = `${((currentStep - 1) / (circle.length - 1)) * 100}%`;
        progress1.style.height = progressBarHeight;
        circle.forEach((circles, index) => {
            const action = index < currentStep ? 'add' : 'remove';
            circles.classList[action]('active');
        });
    } else if (order.order_status === "5") {
        document.getElementById('dev').style.color = "black";
        document.getElementById('dev1').style.color = "black";
        currentStep = 5;
        const progressBarHeight = `${((currentStep - 1) / (circle.length - 1)) * 100}%`;
        progress1.style.height = progressBarHeight;
        circle.forEach((circles, index) => {
            const action = index < currentStep ? 'add' : 'remove';
            circles.classList[action]('active');
        });
    }

  
});
             
             div1.appendChild(date);
             div1.appendChild(id);


             div2.appendChild(titem)
             div2.appendChild(i)
             div0.appendChild(div2)
             div0.appendChild(div3)
             div4.appendChild(amountt);
             div4.appendChild(amout);
             div5.appendChild(status);
             div6.appendChild(cancel);
             div6.appendChild(track);

              main_div.appendChild(div1);
              main_div.appendChild(div0)
            main_div.appendChild(div4);
            main_div.appendChild(div5)
            main_div.appendChild(div6)
                 od.appendChild(main_div);



               
              
            }
        });
    } else {
        console.log("No orders found");
    }


})

















