
  // Mendapatkan elemen dengan id 'menu-toggle' dan menyimpannya dalam variabel menuToggle
  const menuToggle = document.getElementById('menu-toggle');
  // Mendapatkan elemen dengan id 'navbar' dan menyimpannya dalam variabel navbar
  const navbar = document.getElementById('navbar');

  // Menambahkan event listener untuk menangani klik pada elemen menuToggle
  menuToggle.addEventListener('click', () => {
      // Saat menuToggle diklik, toggle class 'active' pada navbar
      // Jika class 'active' belum ada, maka akan ditambahkan; jika sudah ada, akan dihapus
      navbar.classList.toggle('active');
  });

  // Optional: Menambahkan event listener untuk menangani klik di luar menu
  document.addEventListener('click', (event) => {
      // Mengecek jika klik dilakukan di luar navbar dan juga di luar elemen menuToggle
      if (!navbar.contains(event.target) && event.target !== menuToggle) {
          // Jika benar, hapus class 'active' dari navbar
          navbar.classList.remove('active');
      }
  });
