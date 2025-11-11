// MENU RESPONSIVE
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// TOMBOL BELI PRODUK
function beli(nama) {
  alert("Pesanan: " + nama + "\nSilakan hubungi admin WhatsApp ✅");
}
