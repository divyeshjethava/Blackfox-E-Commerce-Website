const hepl_con = document.getElementById('help_con');
const help_child = document.getElementById('help1');
const about = document.getElementById('about');
const about_con = document.getElementById('about_con');
const expo_con = document.getElementById('expo_con');
const explore = document.getElementById('explore');
const account  = document.getElementById('aco');
const track = document.getElementById('ort');
const contact = document.getElementById('contus');
const aboutus = document.getElementById('abouus');
const trackin = document.getElementById('trks');
const black = document.getElementById('blckdiv');
const bar = document.getElementById('bar');
const ul = document.getElementById('ul');
const cross = document.getElementById('cross');

help_child.addEventListener('click',() => {
hepl_con.classList.toggle('helpmini');
});

about.addEventListener('click',() => {
    about_con.classList.toggle('helpmini');
    });

 explore.addEventListener('click',() => {
        expo_con.classList.toggle('helpmini');
        });
account.addEventListener('click', () => {
window.location.href ='profile.html'
}) ; 
track.addEventListener('click', () => {
    window.location.href ='profile.html'
    }) ; 

trackin.addEventListener('click', () => {
        window.location.href ='profile.html'
        }) ;

contact.addEventListener('click', () => {
        window.location.href ='contactus.html';
}) ; 

aboutus.addEventListener('click', () => {
    window.location.href ='about.html';
}) ;

black.addEventListener('click',() => {
window.location.href ='black.html';
});
bar.addEventListener('click',() => {
ul.classList.add('uls');
});
cross.addEventListener('click',() => {
    ul.classList.remove('uls');
});