document.addEventListener('DOMContentLoaded', function() {
    // Profile and Login popup functionality
    const userProfile = document.querySelector('.user-profile');
    const body = document.body;

    userProfile.addEventListener('click', function() {
        const existingPopup = document.querySelector('.login-popup');
        if (existingPopup) {
            existingPopup.style.display = 'flex';
            return;
        }

        const loginPopup = document.createElement('div');
        loginPopup.className = 'login-popup';
        loginPopup.innerHTML = `
            <div class="login-content">
                <span class="close-login">&times;</span>
                <h2>Login to TP Cinema</h2>
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

        body.appendChild(loginPopup);
        loginPopup.style.display = 'flex';

        // Close popup functionality
        const closeBtn = loginPopup.querySelector('.close-login');
        closeBtn.addEventListener('click', () => {
            loginPopup.style.display = 'none';
        });

        // Close on outside click
        loginPopup.addEventListener('click', (e) => {
            if (e.target === loginPopup) {
                loginPopup.style.display = 'none';
            }
        });

        // Handle form submission
        const loginForm = loginPopup.querySelector('#loginForm');
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your login logic here
            console.log('Login attempted');
            loginPopup.style.display = 'none';
        });
    });

    // Search functionality
    const searchBar = document.querySelector('.search-bar input');
    const searchIcon = document.querySelector('.search-bar i');

    if (searchBar && searchIcon) {
        searchBar.addEventListener('focus', () => {
            searchIcon.style.color = '#e50914';
        });

        searchBar.addEventListener('blur', () => {
            searchIcon.style.color = '#fff';
        });

        searchBar.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                const searchTerm = searchBar.value.trim();
                if (searchTerm) {
                    console.log('Searching for:', searchTerm);
                    // Add your search logic here
                }
            }
        });
    }

    // Sidebar toggle functionality
    const menuIcon = document.querySelector('.menu-icon');
    const mainNav = document.querySelector('.main-nav');

    if (menuIcon && mainNav) {
        menuIcon.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            menuIcon.classList.toggle('active');
        });

        // Close sidebar when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuIcon.contains(e.target) && !mainNav.contains(e.target)) {
                mainNav.classList.remove('active');
                menuIcon.classList.remove('active');
            }
        });
    }

    // Language selector functionality
    const languageSelector = document.querySelector('.language-selector');
    
    if (languageSelector) {
        const currentLang = languageSelector.querySelector('span');
        
        languageSelector.addEventListener('click', (e) => {
            e.stopPropagation();
            languageSelector.classList.toggle('active');
        });

        // Close language selector when clicking outside
        document.addEventListener('click', () => {
            languageSelector.classList.remove('active');
        });
    }
});