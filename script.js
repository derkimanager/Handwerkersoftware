// Hier können zukünftige interaktive Funktionen ergänzt werden 
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.stars').forEach(function(starEl) {
    const value = parseInt(starEl.getAttribute('data-value'), 10) || 0;
    let stars = '';
    for (let i = 1; i <= 5; i++) {
      stars += i <= value ? '★' : '☆';
    }
    starEl.textContent = stars;
  });
}); 