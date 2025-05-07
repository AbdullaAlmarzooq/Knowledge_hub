// Function to save the name and display it
function saveName() {
    // Get the values from the input fields
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    
    // Simple validation
    if (!firstName || !lastName) {
        document.getElementById("result").innerText = "Please fill in both fields";
        document.getElementById("result").classList.add("error");
        return;
    }
    
    // Combine into full name
    const fullName = firstName + " " + lastName;
    
    // Save to localStorage so main_page can access it
    localStorage.setItem("userName", fullName);
    
    // Display the result
    document.getElementById("result").innerText = "Welcome, " + fullName + "!";
    document.getElementById("result").classList.remove("error");
    document.getElementById("result").classList.add("success");
    
    // Log to console as well
    console.log("Full name saved as string:", fullName);
    
    // Redirect to main page after short delay
    setTimeout(() => {
        window.location.href = "main_page.html";
    }, 2000);
  }
  
  function skipToMain() {
    // Clear any existing name when skipping
    localStorage.removeItem("userName");
    window.location.href = "main_page.html";
  }
  
  // Single toggleDarkMode function (removed duplicate)
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.documentElement.classList.toggle('dark-mode');
    
    // Save dark mode preference
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
  }
  
  // DOM ready function for other pages can be added here
  document.addEventListener('DOMContentLoaded', function() {
    // This code runs when the DOM is fully loaded on any page using Scripts.js
    
    // Apply dark mode if enabled
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.documentElement.classList.add('dark-mode');
        document.body.classList.add('dark-mode');
    }
  });