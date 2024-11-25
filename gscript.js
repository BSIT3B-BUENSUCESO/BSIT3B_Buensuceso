// JavaScript for Modal Functionality
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementsByClassName('close')[0];

// Add click event to all gallery images
document.querySelectorAll('.gallery-img').forEach(img => {
  img.addEventListener('click', function () {
    modal.style.display = 'block';
    modalImage.src = this.src;
  });
});

// Close the modal
closeModal.onclick = function () {
  modal.style.display = 'none';
};

// Close modal when clicking outside the image
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
