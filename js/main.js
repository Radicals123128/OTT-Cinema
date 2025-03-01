// Check if user is logged in on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    if (isLoggedIn) {
        // Update profile icon to show logged in state
        const userProfile = document.querySelector('.user-profile');
        if (userProfile) {
            userProfile.classList.add('logged-in');
        }
    }
});

// Handle profile click
function handleProfileClick() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    if (!isLoggedIn) {
        // Redirect to login page if not logged in
        window.location.href = 'login.html';
    } else {
        // Show user dropdown if logged in
        toggleUserDropdown();
    }
}

// Toggle user dropdown menu
function toggleUserDropdown() {
    let existingDropdown = document.querySelector('.user-dropdown');
    
    if (existingDropdown) {
        existingDropdown.remove();
        return;
    }
    
    const userEmail = localStorage.getItem('userEmail');
    const dropdown = document.createElement('div');
    dropdown.className = 'user-dropdown';
    dropdown.innerHTML = `
        <div class="user-info">
            <i class="fas fa-user-circle"></i>
            <span>${userEmail || 'User'}</span>
        </div>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item">Profile</a>
        <a href="#" class="dropdown-item">Settings</a>
        <a href="#" class="dropdown-item" onclick="logout()">Logout</a>
    `;
    
    // Position the dropdown
    const userProfile = document.querySelector('.user-profile');
    if (userProfile) {
        userProfile.appendChild(dropdown);
    }
}

// Handle logout
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    window.location.reload();
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const userProfile = document.querySelector('.user-profile');
    const dropdown = document.querySelector('.user-dropdown');
    
    if (dropdown && !userProfile.contains(event.target)) {
        dropdown.remove();
    }
});// Sample data for hero slider
const heroSlides = [
    {
        image: 'https://i.pinimg.com/736x/26/8b/e0/268be02061a78cdf9ae1b83fdeb0ae44.jpg',
        title: 'TATA IPL 2024',
        description: 'Watch Live Cricket Matches'
    },
    {
        image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/a-still-from-dunki-235647206-16x9_0.jpg?VersionId=SRn9smCb43uJq3Wb0IFiDdejIklfTpfu&size=690:388',
        title: 'Dunki',
        description: 'Stream Now in 4K'
    },
    {
        image: 'https://wallpapercave.com/wp/wp13286331.jpg',
        title: 'Animal',
        description: 'Watch Now'
    }
];

// Sample data for content carousels
const contentData = {
    trending: [
        { title: 'IPL 2024', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-vzCpqWd_evAiUtGj-pvN7edftF2aoG9U6Q&s', meta: '2024 • Live' },
        { title: 'Dunki', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRrO2toCOOQTvTTHG2sUqvQ6DnAJPCl09EEOq_7XOwLkf3xCbdZ', meta: '2024 • Drama' },
        { title: 'Animal', image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9zRNezyoKFad1erjGfV9ejYPQZiqpAX3e6DJyCoRc0cxoYP_8', meta: '2024 • Action' },
        { title: 'Tiger 3', image: 'https://upload.wikimedia.org/wikipedia/en/f/f8/Tiger_3_poster.jpg', meta: '2023 • Action' },
        { title: '12th Fail', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcfdjsHAx1TtQ3mLEg4sHuO_pQnWVs4ndYs8hMwwmnkP_pKKFA', meta: '2023 • Drama' }
    ],
    movies: [
        { title: 'Sam Bahadur', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSttOFuaTSzHIzStwDnHspZ1fUtKjpu3ZMgjmUOhkDPMCABQM6E', meta: '2023 • Biography' },
        { title: 'Fighter', image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYimcqDt14seeLMxXUwPrHDs1m-Kq1lE71c7MXQwvJHfZFhkYP', meta: '2024 • Action' },
        { title: 'Salaar', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQtqR7E0nfNEQBDpZasJ04uz-7zpzLGYl0PDNX8oSOLitkl7tGB', meta: '2023 • Action' },
        { title: 'Jawan', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA8fxJgOk6Q4UGjmsa1q3CQ1Q05Lt0Dn1leAl6_KexCEjqJAe6', meta: '2023 • Action' },
        { title: 'Pathaan', image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR9d4A_ocMn4S5XlrpD_gmxlGXAufiWvvPuGmGFhZJnuHbL9Y26', meta: '2023 • Action' }
    ],
    tvShows: [
        { title: 'Anupamaa', image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQClIE9-A0GGEgUnZ4B8Ft_0vqQbbw5xiIwja0AZww5i3jxgn0', meta: 'Drama • Star Plus' },
        { title: 'TMKOC', image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS5mDTX_fu1g9g6pXvwsaB-hUNPfrdG4ntNGy2jL3DtVOIiYadQ', meta: 'Comedy • SAB TV' },
        { title: 'KBC', image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSofPKxV7EfkLaPQ7A64xLQg_P_TcsA7w7AAKB5SFMRclIUfpg9', meta: 'Game Show • Sony' },
        { title: 'Indian Idol', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTqqJr5JOqO8jnwnAhAAzlxka_URDAVDuW-XeR7q06poPcFYdK', meta: 'Reality • Sony' },
        { title: 'Big Boss', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTD7cpzXLnrgMz3bGw421OTa0L4uMtnjIS8G68xTbgkwlU64HVr', meta: 'Reality • Colors' }
    ],
    sports: [
        { title: 'Cricket Live', image: 'https://newlinesmag.com/wp-content/uploads/GettyImages-2162768886-web.jpg', meta: 'Live • Sports' },
        { title: 'Pro Kabaddi', image: 'https://www.prokabaddi.com/static-assets/waf-images/c1/bf/d0/16-9/RbQzxeevrW.jpg?v=2.27&w=1920', meta: 'Live • Sports' },
        { title: 'ISL 2024', image: 'https://imgk.timesnownews.com/story/1538107233-ISL-poster.jpg?tr=w-600,h-450,fo-auto', meta: 'Live • Football' },
        { title: 'WWE', image: 'https://www.wrestlinginc.com/img/gallery/details-on-confirmed-deal-for-wwe-smackdown-to-leave-fox-return-to-cable/intro-1695303063.webp', meta: 'Wrestling • Sports' },
        { title: 'Formula 1', image: 'https://rtrsports.com/wp-content/uploads/2024/07/pexels-rezk-assaf-10795564.jpg', meta: 'Racing • Sports' }
    ]
};

// Function to initialize the Hero Slider
function initHeroSlider() {
    const sliderContainer = document.querySelector('.hero-slider');

    if (!sliderContainer) {
        console.error("❌ Error: Hero slider container not found!");
        return;
    }

    heroSlides.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.className = `hero-slide ${index === 0 ? 'active' : ''}`;
        slideElement.innerHTML = `
            <img src="${slide.image}" alt="${slide.title}" onerror="this.src='https://via.placeholder.com/1280x720?text=Image+Not+Found';">
            <div class="hero-content">
                <h1>${slide.title}</h1>
                <p>${slide.description}</p>
            </div>
        `;
        sliderContainer.appendChild(slideElement);
    });

    // Set up slider navigation
    document.querySelector('.prev-slide').addEventListener('click', () => changeSlide(-1));
    document.querySelector('.next-slide').addEventListener('click', () => changeSlide(1));

    setInterval(() => changeSlide(1), 5000);
}

let currentSlide = 0;
function changeSlide(direction) {
    const slides = document.querySelectorAll('.hero-slide');
    if (!slides.length) return;

    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Function to create a content item
function createContentItem(item) {
    const div = document.createElement('div');
    div.className = 'content-item';
    div.innerHTML = `
        <img src="${item.image}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/300x200?text=Image+Not+Found';">
        <div class="content-item-info">
            <h3>${item.title}</h3>
            <p>${item.meta}</p>
        </div>
    `;
    return div;
}

// Function to populate content carousels
function populateCarousels() {
    // Define the sections to populate
    const sections = [
        { id: 'trending', title: 'Trending Now' },
        { id: 'movies', title: 'Latest Movies' },
        { id: 'tvShows', title: 'TV Shows' },
        { id: 'sports', title: 'Live Sports' }
    ];

    const mainContent = document.querySelector('.main-content');
    if (!mainContent) {
        console.error("❌ Error: Main content container not found!");
        return;
    }

    sections.forEach(section => {
        // Create section container
        const sectionContainer = document.createElement('section');
        sectionContainer.className = 'content-section';

        // Add section title
        const sectionTitle = document.createElement('h2');
        sectionTitle.className = 'section-title';
        sectionTitle.textContent = section.title;
        sectionContainer.appendChild(sectionTitle);

        // Create carousel container
        const carousel = document.createElement('div');
        carousel.className = `content-carousel ${section.id}-carousel`;

        // Add items to carousel
        if (contentData[section.id]) {
            contentData[section.id].forEach(item => {
                carousel.appendChild(createContentItem(item));
            });
        }

        // Add scroll buttons
        const prevButton = document.createElement('button');
        prevButton.className = 'carousel-control prev';
        prevButton.innerHTML = '❮';
        prevButton.onclick = () => scrollCarousel(carousel, -1);

        const nextButton = document.createElement('button');
        nextButton.className = 'carousel-control next';
        nextButton.innerHTML = '❯';
        nextButton.onclick = () => scrollCarousel(carousel, 1);

        // Create carousel wrapper to contain both carousel and controls
        const carouselWrapper = document.createElement('div');
        carouselWrapper.className = 'carousel-wrapper';
        carouselWrapper.appendChild(prevButton);
        carouselWrapper.appendChild(carousel);
        carouselWrapper.appendChild(nextButton);

        sectionContainer.appendChild(carouselWrapper);
        mainContent.appendChild(sectionContainer);
    });
}

// Function to handle carousel scrolling
function scrollCarousel(carousel, direction) {
    const scrollAmount = carousel.clientWidth * 0.8 * direction;
    carousel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

// Initialize all functionality when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("✅ DOM Loaded! Initializing features...");
    
    initHeroSlider();
    populateCarousels();
});
