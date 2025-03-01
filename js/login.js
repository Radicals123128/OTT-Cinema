// Check if user is logged in
let isLoggedIn = false;

document.addEventListener('DOMContentLoaded', function() {
    // Check if user is already logged in (you can use localStorage or sessionStorage)
    isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Here you would typically make an API call to verify credentials
            // For demo purposes, we'll just simulate a successful login
            simulateLogin(email, password);
        });
    }
});

function simulateLogin(email, password) {
    const loginBtn = document.querySelector('.login-btn');
    const successAnimation = document.querySelector('.login-success-animation');
    
    // Disable the button and show loading state
    loginBtn.disabled = true;
    loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
    
    // Simulate API call delay
    setTimeout(() => {
        // Show success animation
        successAnimation.classList.add('show');
        loginBtn.innerHTML = 'Success!';
        
        // Store login state
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        
        // Redirect to home page after animation
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }, 1000);
}

// Function to handle profile click
function handleProfileClick() {
    if (isLoggedIn) {
        showUserDetails();
    } else {
        window.location.href = 'login.html';
    }
}

// Function to show user details
function showUserDetails() {
    const userEmail = localStorage.getItem('userEmail');
    // Create and show a dropdown with user details
    const userDropdown = document.createElement('div');
    userDropdown.className = 'user-dropdown';
    userDropdown.innerHTML = `
        <div class="user-info">
            <i class="fas fa-user-circle"></i>
            <span>${userEmail}</span>
        </div>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item">Profile</a>
        <a href="#" class="dropdown-item">Settings</a>
        <a href="#" class="dropdown-item" onclick="logout()">Logout</a>
    `;
    
    document.body.appendChild(userDropdown);
}

// Function to handle logout
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    window.location.reload();
}