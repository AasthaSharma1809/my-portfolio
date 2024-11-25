window.onload = function() {
    const header = document.getElementById("main-header");

    // Check if the current page is not 'index.html'
    if (window.location.pathname !== '/index.html' && header) {
        header.style.display = 'none'; // Hide the header
    }
};
