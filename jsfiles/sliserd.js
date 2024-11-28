document.addEventListener('DOMContentLoaded', function() {
    const slidesContainer = document.getElementById('slides_img');

    const prevButton = document.getElementById('prvs');
    const nextButton = document.getElementById('nxt');
    const imageWidth = 300;
    prevButton.addEventListener('click',() =>{
        slidesContainer.style.scrollBehavior = 'smooth';
        slidesContainer.scrollLeft -= imageWidth * 2;
     if (slidesContainer.scrollLeft >= slidesContainer.scrollWidth - slidesContainer.offsetWidth) {
      slidesContainer.scrollLeft = 0;
    }
      })
      nextButton.addEventListener('click',() =>{
        slidesContainer.scrollLeft += imageWidth * 2;
        slidesContainer.style.scrollBehavior = 'smooth';
        
        if (slidesContainer.scrollLeft < 0) {
          slidesContainer.scrollLeft = slidesContainer.scrollWidth - slidesContainer.offsetWidth;
        }
     
      })
       
   
    })
const zoom =  document.getElementById('image_show');

    const cnl =  document.getElementById('xmark');
cnl.addEventListener('click',() => {
    
  zoom.style.display='none';
 })
 