// Qustreso Studios Website Integration
// This file contains functions to fetch and display data from the Discord bot API

class QustresoAPI {
    constructor(baseURL = null) {
        // Use provided baseURL or fall back to config
        this.baseURL = baseURL || (typeof WEBSITE_CONFIG !== 'undefined' ? WEBSITE_CONFIG.API_BASE_URL : 'http://localhost:5000');
        
        if (typeof WEBSITE_CONFIG !== 'undefined' && WEBSITE_CONFIG.DEBUG) {
            console.log('🔗 API Base URL:', this.baseURL);
        }
    }

    // Fetch all products
    async getProducts() {
        try {
            const response = await fetch(`${this.baseURL}/api/products`);
            const data = await response.json();
            return data.success ? data.products : [];
        } catch (error) {
            console.error('Error fetching products:', error);
            return [];
        }
    }

    // Fetch all past work
    async getPastWork() {
        try {
            const response = await fetch(`${this.baseURL}/api/past-work`);
            const data = await response.json();
            return data.success ? data.past_work : [];
        } catch (error) {
            console.error('Error fetching past work:', error);
            return [];
        }
    }

    // Search products and past work
    async search(query) {
        try {
            const response = await fetch(`${this.baseURL}/api/search?q=${encodeURIComponent(query)}`);
            const data = await response.json();
            return data.success ? data.results : { products: [], past_work: [] };
        } catch (error) {
            console.error('Error searching:', error);
            return { products: [], past_work: [] };
        }
    }

    // Get statistics
    async getStats() {
        try {
            const response = await fetch(`${this.baseURL}/api/stats`);
            const data = await response.json();
            return data.success ? data.stats : null;
        } catch (error) {
            console.error('Error fetching stats:', error);
            return null;
        }
    }
}

// Example usage functions for your website

// Display products in a container
async function displayProducts(containerId = 'products-container') {
    const api = new QustresoAPI();
    const products = await api.getProducts();
    const container = document.getElementById(containerId);
    
    if (!container) {
        console.error('Container not found:', containerId);
        return;
    }

    if (products.length === 0) {
        container.innerHTML = '<p class="text-gray-400">No products available.</p>';
        return;
    }

    const productsHTML = products.map(product => `
        <div class="product-card glass rounded-2xl p-4 border border-white/10 hover:scale-105 transition-all duration-300">
            <h3 class="text-xl font-semibold text-white mb-2">${product.name}</h3>
            <div class="space-y-2">
                <a href="${product.link}" target="_blank" class="block text-primary-400 hover:text-primary-300 transition-colors">
                    🔗 View Product
                </a>
                <a href="${product.video}" target="_blank" class="block text-secondary-400 hover:text-secondary-300 transition-colors">
                    🎥 Watch Video
                </a>
            </div>
            <div class="mt-3 text-xs text-gray-400">
                Added by: ${product.added_by}
            </div>
        </div>
    `).join('');

    container.innerHTML = productsHTML;
}

// Display past work in a container
async function displayPastWork(containerId = 'past-work-container') {
    const api = new QustresoAPI();
    const pastWork = await api.getPastWork();
    const container = document.getElementById(containerId);
    
    if (!container) {
        console.error('Container not found:', containerId);
        return;
    }

    if (pastWork.length === 0) {
        container.innerHTML = '<p class="text-gray-400">No past work available.</p>';
        return;
    }

    const pastWorkHTML = pastWork.map(work => `
        <div class="past-work-card glass rounded-2xl p-4 border border-white/10 hover:scale-105 transition-all duration-300">
            <h3 class="text-xl font-semibold text-white mb-2">${work.name}</h3>
            <a href="${work.video}" target="_blank" class="block text-secondary-400 hover:text-secondary-300 transition-colors mb-3">
                🎥 Watch Project
            </a>
            <div class="text-xs text-gray-400">
                Added by: ${work.added_by}
            </div>
        </div>
    `).join('');

    container.innerHTML = pastWorkHTML;
}

// Update stats display
async function updateStats(containerId = 'stats-container') {
    const api = new QustresoAPI();
    const stats = await api.getStats();
    const container = document.getElementById(containerId);
    
    if (!container || !stats) {
        return;
    }

    container.innerHTML = `
        <div class="stats-grid grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="stat-item text-center">
                <div class="text-2xl font-bold text-primary-400">${stats.total_products}</div>
                <div class="text-sm text-gray-300">Products</div>
            </div>
            <div class="stat-item text-center">
                <div class="text-2xl font-bold text-secondary-400">${stats.total_past_work}</div>
                <div class="text-sm text-gray-300">Past Work</div>
            </div>
            <div class="stat-item text-center">
                <div class="text-xs text-gray-400">Last Updated</div>
                <div class="text-sm text-gray-300">${new Date(stats.last_updated).toLocaleDateString()}</div>
            </div>
        </div>
    `;
}

// Search functionality
async function performSearch(query, productsContainerId = 'search-results-products', pastWorkContainerId = 'search-results-past-work') {
    const api = new QustresoAPI();
    const results = await api.search(query);
    
    // Display product results
    const productsContainer = document.getElementById(productsContainerId);
    if (productsContainer) {
        if (results.products.length === 0) {
            productsContainer.innerHTML = '<p class="text-gray-400">No products found.</p>';
        } else {
            const productsHTML = results.products.map(product => `
                <div class="product-card glass rounded-2xl p-4 border border-white/10">
                    <h3 class="text-xl font-semibold text-white mb-2">${product.name}</h3>
                    <a href="${product.link}" target="_blank" class="block text-primary-400 hover:text-primary-300 transition-colors">
                        🔗 View Product
                    </a>
                </div>
            `).join('');
            productsContainer.innerHTML = productsHTML;
        }
    }
    
    // Display past work results
    const pastWorkContainer = document.getElementById(pastWorkContainerId);
    if (pastWorkContainer) {
        if (results.past_work.length === 0) {
            pastWorkContainer.innerHTML = '<p class="text-gray-400">No past work found.</p>';
        } else {
            const pastWorkHTML = results.past_work.map(work => `
                <div class="past-work-card glass rounded-2xl p-4 border border-white/10">
                    <h3 class="text-xl font-semibold text-white mb-2">${work.name}</h3>
                    <a href="${work.video}" target="_blank" class="block text-secondary-400 hover:text-secondary-300 transition-colors">
                        🎥 Watch Project
                    </a>
                </div>
            `).join('');
            pastWorkContainer.innerHTML = pastWorkHTML;
        }
    }
}

// Auto-refresh data
function startAutoRefresh() {
    const interval = typeof WEBSITE_CONFIG !== 'undefined' ? WEBSITE_CONFIG.AUTO_REFRESH_INTERVAL : 5 * 60 * 1000;
    setInterval(() => {
        displayProducts();
        displayPastWork();
        updateStats();
    }, interval);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load initial data
    displayProducts();
    displayPastWork();
    updateStats();
    
    // Start auto-refresh
    startAutoRefresh();
    
    // Set up search functionality if search form exists
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const query = document.getElementById('search-input').value;
            if (query.trim()) {
                performSearch(query);
            }
        });
    }
});

// Export for use in other scripts
window.QustresoAPI = QustresoAPI;
window.displayProducts = displayProducts;
window.displayPastWork = displayPastWork;
window.updateStats = updateStats;
window.performSearch = performSearch; 