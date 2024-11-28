// Select the button and description
const toggleBtn = document.getElementById('toggle-about-btn');
const aboutDescription = document.getElementById('about-description');

// Add an event listener for the button click
toggleBtn.addEventListener('click', () => {
  if (aboutDescription.style.display === 'none') {
    // Show the description
    aboutDescription.style.display = 'block';
    toggleBtn.textContent = 'Hide About Me';
  } else {
    // Hide the description
    aboutDescription.style.display = 'none';
    toggleBtn.textContent = 'Show About Me';
  }
});
