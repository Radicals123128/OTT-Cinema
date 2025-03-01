// Theme Management
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.init();
    }

    init() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme) {
            document.body.classList.toggle('dark-theme', savedTheme === 'dark');
        } else {
            document.body.classList.toggle('dark-theme', prefersDark);
        }

        this.updateToggleButton();
        this.bindEvents();
    }

    toggleTheme() {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        this.updateToggleButton();
    }

    updateToggleButton() {
        const isDark = document.body.classList.contains('dark-theme');
        this.themeToggle.innerHTML = `<i class="fas fa-${isDark ? 'sun' : 'moon'}"></i> ${isDark ? 'Light' : 'Dark'} Mode`;
    }

    bindEvents() {
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }
}

// Content Management
class ContentManager {
    constructor() {
        this.initWatchlist();
        this.initDownloads();
        this.initRatings();
    }

    initWatchlist() {
        const watchlistBtns = document.querySelectorAll('.watchlist-btn');
        watchlistBtns.forEach(btn => {
            btn.addEventListener('click', () => this.toggleWatchlist(btn));
        });
    }

    toggleWatchlist(btn) {
        const icon = btn.querySelector('i');
        const isInWatchlist = icon.classList.contains('fas');
        
        icon.classList.toggle('far', isInWatchlist);
        icon.classList.toggle('fas', !isInWatchlist);
        
        this.showToast(isInWatchlist ? 'Removed from watchlist' : 'Added to watchlist');
        
        // Save to localStorage
        const contentId = btn.closest('.content-item').dataset.id;
        const watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
        
        if (isInWatchlist) {
            const index = watchlist.indexOf(contentId);
            if (index > -1) watchlist.splice(index, 1);
        } else {
            watchlist.push(contentId);
        }
        
        localStorage.setItem('watchlist', JSON.stringify(watchlist));
    }

    initDownloads() {
        const downloadBtns = document.querySelectorAll('.download-btn');
        downloadBtns.forEach(btn => {
            btn.addEventListener('click', () => this.handleDownload(btn));
        });
    }

    handleDownload(btn) {
        const isPremium = this.checkPremiumStatus();
        if (!isPremium) {
            this.showToast('Please upgrade to Premium to enable downloads', 'error');
            return;
        }

        const icon = btn.querySelector('i');
        icon.className = 'fas fa-spinner fa-spin';

        // Simulate download process
        setTimeout(() => {
            icon.className = 'fas fa-check';
            this.showToast('Download started');
            
            setTimeout(() => {
                icon.className = 'fas fa-download';
            }, 3000);
        }, 1500);
    }

    initRatings() {
        const ratingContainers = document.querySelectorAll('.rating');
        ratingContainers.forEach(container => {
            const stars = container.querySelectorAll('.star');
            stars.forEach((star, index) => {
                star.addEventListener('click', () => this.handleRating(container, index + 1));
            });
        });
    }

    handleRating(container, rating) {
        const contentId = container.closest('.content-item').dataset.id;
        const ratings = JSON.parse(localStorage.getItem('ratings') || '{}');
        ratings[contentId] = rating;
        localStorage.setItem('ratings', JSON.stringify(ratings));

        this.updateRatingDisplay(container, rating);
        this.showToast(`Rated ${rating} stars`);
    }

    updateRatingDisplay(container, rating) {
        const stars = container.querySelectorAll('.star');
        stars.forEach((star, index) => {
            star.classList.toggle('active', index < rating);
        });
    }

    checkPremiumStatus() {
        // This would typically check with a backend service
        return false; // For demo purposes
    }

    showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }
}

// Search Functionality
class SearchManager {
    constructor() {
        this.searchInput = document.getElementById('searchInput');
        this.searchSuggestions = document.getElementById('searchSuggestions');
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        let searchTimeout;
        
        this.searchInput.addEventListener('input', () => {
            clearTimeout(searchTimeout);
            const query = this.searchInput.value.trim();
            
            if (query.length > 2) {
                searchTimeout = setTimeout(() => this.performSearch(query), 300);
            } else {
                this.searchSuggestions.style.display = 'none';
            }
        });

        document.addEventListener('click', (e) => {
            if (!this.searchInput.contains(e.target)) {
                this.searchSuggestions.style.display = 'none';
            }
        });
    }

    async performSearch(query) {
        // This would typically be an API call
        const results = await this.mockSearchAPI(query);
        this.displayResults(results);
    }

    async mockSearchAPI(query) {
        // Simulated API response
        const mockData = [
            { title: 'Avatar 2', type: 'Movie', year: 2022 },
            { title: 'The Matrix', type: 'Movie', year: 1999 },
            { title: 'Stranger Things', type: 'TV Show', year: 2016 }
        ];

        return mockData.filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase())
        );
    }

    displayResults(results) {
        this.searchSuggestions.innerHTML = results
            .map(item => `
                <div class="suggestion-item">
                    <div class="suggestion-title">${item.title}</div>
                    <div class="suggestion-meta">${item.type} • ${item.year}</div>
                </div>
            `).join('');
        
        this.searchSuggestions.style.display = results.length ? 'block' : 'none';
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    new ContentManager();
    new SearchManager();
});