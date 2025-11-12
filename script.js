document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navList = document.getElementById("nav-list");

  menuToggle.addEventListener("click", function () {
    navList.classList.toggle("show");
    menuToggle.classList.toggle("open");
  });
});
  function beli(nama) {
    alert("Pesanan: " + nama + "\nSilakan hubungi admin WhatsApp ✅");
  }
