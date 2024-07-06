// Ensure the button moves with the page scroll
window.addEventListener('scroll', function() {
    const whatsappButton = document.querySelector('.whatsapp-button');
    whatsappButton.style.top = `${window.scrollY + window.innerHeight - 80}px`; // Adjust position as needed
  });
  