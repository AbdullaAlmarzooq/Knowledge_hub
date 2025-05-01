// Fixed toggle dark mode function
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark-mode');
  document.body.classList.toggle('dark-mode');
  
  // Save the current mode
  if (document.documentElement.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
}