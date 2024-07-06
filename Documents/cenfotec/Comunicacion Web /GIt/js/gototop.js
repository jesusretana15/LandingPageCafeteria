document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById('flechabtn');
    const menuPage = document.getElementById('MenuPage');
    const banner = document.getElementById('bannerpage');
  
    
    function toggleButton(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          scrollToTopButton.style.display = 'none';
        } else {
          scrollToTopButton.style.display = 'block';
        }
      });
    }
  
 
    const observer = new IntersectionObserver(toggleButton, {
     
    });
 
    observer.observe(banner);
    observer.observe(menuPage);

    
  });