document.addEventListener("DOMContentLoaded", function() {
    // Simulate loading time, you can adjust this according to your needs
    setTimeout(function(){
      // Hide loading screen
      document.querySelector('.loading-screen').style.display = 'none';
      // Show main content
      document.body.style.overflow = 'visible'; // Restore scrolling
    }, 3000); // Change 3000 to your desired loading time in milliseconds
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    // Simulate loading time, you can adjust this according to your needs
    setTimeout(function(){
      // Redirect to the second page
      window.location.href = "page2.html";
    }, 3000); // Change 3000 to your desired loading time in milliseconds
  });