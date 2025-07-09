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
document.getElementById('col-selector').addEventListener('change', e => {
  const selected = Array.from(e.target.selectedOptions).map(opt => opt.value);
  const colMap = {
    'funktionsumfang': 2,
    'benutzerfreundlichkeit': 3,
    'preis-leistung': 4,
    'support': 5,
    'integration': 6,
    'mobil': 7,
    'sicherheit': 8
  };
  Object.entries(colMap).forEach(([key, idx]) => {
    const show = selected.includes(key);
    document.querySelectorAll('tr').forEach(row => {
      if (row.children[idx]) {
        row.children[idx].style.display = show ? '' : 'none';
      }
    });
  });
}); 