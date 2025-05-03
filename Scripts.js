// Toggle dark mode function with immediate icon switching
function toggleDarkMode() {
  // Toggle dark mode classes
  document.documentElement.classList.toggle('dark-mode');
  document.body.classList.toggle('dark-mode');
  
  // Update the icon inside the button immediately
  updateDarkModeButton();
  
  // Save the current mode to localStorage
  if (document.documentElement.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
}

// Function to update the button icon and text based on current mode
function updateDarkModeButton() {
  const darkModeBtn = document.querySelector('.dark-mode-btn');
  if (!darkModeBtn) return; // Safety check
  
  if (document.documentElement.classList.contains('dark-mode')) {
    darkModeBtn.innerHTML = '<i class="fa-regular fa-lightbulb"></i> Light Mode';
  } else {
    darkModeBtn.innerHTML = '<i class="fa-regular fa-moon"></i> Dark Mode';
  }
}

// Initialize the button text/icon when the page loads
document.addEventListener('DOMContentLoaded', function() {
  // Apply dark mode if enabled in localStorage
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.documentElement.classList.add('dark-mode');
    document.body.classList.add('dark-mode');
  }
  
  // Update button to match current state
  updateDarkModeButton();
});