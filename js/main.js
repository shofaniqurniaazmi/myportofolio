// Toggle & Responsive Navigation
// Ambil elemen modal dan kontennya
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");

// Ambil semua gambar di dalam portofolio
const portfolioImages = document.querySelectorAll(".portfolio img");

// Tambahkan event listener untuk setiap gambar
portfolioImages.forEach((image) => {
  image.addEventListener("click", () => {
    modal.style.display = "block"; // Tampilkan modal
    modalImage.src = image.src; // Set gambar modal ke gambar yang diklik
  });
});

// Tutup modal ketika tombol "close" diklik
const closeModalButton = document.querySelector(".close");
closeModalButton.addEventListener("click", () => {
  modal.style.display = "none"; // Sembunyikan modal
});

// Tutup modal ketika pengguna mengklik di luar konten gambar
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

function openModal(img) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImage.src = img.src;
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");
  
    burger.addEventListener("click", () => {
      // Toggle nav list and burger class
      navLists.classList.toggle("nav-active");
      burger.classList.toggle("toggle-burger");
    });
  };
  
  navSlide();
  
  // Clear form before unload
  window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
      form.reset();
    }
  };
  