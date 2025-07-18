// Qustreso Studios Website Configuration
// Update this file with your API URL when deploying

const WEBSITE_CONFIG = {
    // Replace this with your Bothosting API URL
    // Example: 'https://your-app-name.bothosting.com' or 'https://your-domain.com'
    API_BASE_URL: 'https://your-bothosting-app-url.com',
    
    // Auto-refresh interval in milliseconds (5 minutes)
    AUTO_REFRESH_INTERVAL: 5 * 60 * 1000,
    
    // Enable/disable debug logging
    DEBUG: false
};

// Log configuration in development
if (WEBSITE_CONFIG.DEBUG) {
    console.log('🌐 Qustreso Studios Website Config:', WEBSITE_CONFIG);
} 