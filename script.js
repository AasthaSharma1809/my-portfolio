// Show an alert when the page loads
window.onload = function() {
    alert("Thank you for visiting my website!");
};

// Toggle "Show More" and "Show Less" functionality
function toggleContent() {
    const moreText = document.getElementById("moreContent");
    const btnText = document.getElementById("toggleBtn");

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        btnText.textContent = "Show Less";
    } else {
        moreText.style.display = "none";
        btnText.textContent = "Show More";
    }
}
