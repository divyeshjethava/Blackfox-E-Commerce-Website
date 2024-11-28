const container = document.getElementById('container');
const resiterbtn = document.getElementById('registration');
const login = document.getElementById('login');
const vid1 = document.getElementById('vid1')
const vid2 = document.getElementById('vid')

resiterbtn.addEventListener('click', () =>{
    container.classList.add('active');
  
});

login.addEventListener('click', () =>{
    container.classList.remove('active');
   
});
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle scroll event
  function handleScroll() {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
      if (isInViewport(item)) {
        item.classList.add('in-view');
      }
    });
  }
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
  
  // Initial check on page load
  handleScroll();


