const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeBtn = document.getElementById("close-btn");

// Open lightbox when a thumbnail is clicked
galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Build the full-size image URL by removing "-thumbnail"
    const fullSizeSrc = item.src.replace("-thumbnail", "");
    lightboxImage.src = fullSizeSrc;

    // Show the lightbox (display: flex)
    lightbox.style.display = "flex";
  });
});

// Close lightbox when the close button is clicked
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Close lightbox when clicking anywhere on the lightbox background
lightbox.addEventListener("click", (event) => {
  // Only close if the click target is the lightbox itself (not the image or button)
  if (event.target === lightbox) {
    lightbox.style.display = "none";
  }
});