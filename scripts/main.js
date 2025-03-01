// Search bar functionality
document.addEventListener('DOMContentLoaded', function() {
    // Search bar functionality
    const searchBar = document.querySelector('.search-bar input');
    const searchIcon = document.querySelector('.search-bar i');

    searchBar.addEventListener('focus', function() {
        searchIcon.style.color = '#e50914';
    });

    searchBar.addEventListener('blur', function() {
        searchIcon.style.color = '#fff';
    });

    searchBar.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            // Implement search functionality here
            console.log('Searching for:', this.value);
            // You can add your search logic here
        }
    });

    // Sidebar functionality
    const menuIcon = document.querySelector('.menu-icon');
    const mainNav = document.querySelector('.main-nav');

    menuIcon.addEventListener('click', function() {
        mainNav.classList.toggle('show');
        this.classList.toggle('active');
    });

    // Profile and Login popup functionality
    const userProfile = document.querySelector('.user-profile');
    const loginPopup = document.createElement('div');
    loginPopup.className = 'login-popup';
    loginPopup.innerHTML = `
        <div class="login-content">
            <span class="close-login">&times;</span>
            <h2>Login</h2>
            <form id="loginForm">
                <div class="form-group">
                    <input type="email" placeholder="Email" required>
                </div>
                <div class="form-group">
                    <input type="password" placeholder="Password" required>
                </div>
                <button type="submit" class="login-btn">Login</button>
            </form>
            <p class="signup-link">New to TP Cinema? <a href="#">Sign up now</a></p>
        </div>
    `;

    document.body.appendChild(loginPopup);

    userProfile.addEventListener('click', function() {
        loginPopup.style.display = 'flex';
    });

    // Close popup when clicking on close button or outside
    loginPopup.addEventListener('click', function(e) {
        if (e.target.classList.contains('close-login') || e.target === loginPopup) {
            loginPopup.style.display = 'none';
        }
    });

    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your login logic here
        console.log('Login attempted');
        loginPopup.style.display = 'none';
    });

    // Language selector functionality
    const languageSelector = document.querySelector('.language-selector');
    const languageOptions = document.createElement('div');
    languageOptions.className = 'language-options';
    languageOptions.innerHTML = `
        <div class="language-option">English</div>
        <div class="language-option">Hindi</div>
        <div class="language-option">Spanish</div>
        <div class="language-option">French</div>
    `;

    languageSelector.appendChild(languageOptions);

    languageSelector.addEventListener('click', function(e) {
        languageOptions.classList.toggle('show');
    });

    // Close language options when clicking outside
    document.addEventListener('click', function(e) {
        if (!languageSelector.contains(e.target)) {
            languageOptions.classList.remove('show');
        }
    });
});