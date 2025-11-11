<script>
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    menuToggle.classList.toggle('active');
  });
</script>


// TOMBOL BELI PRODUK
function beli(nama) {
  alert("Pesanan: " + nama + "\nSilakan hubungi admin WhatsApp ✅");
}
