// Retro Loading Screen
window.onload = () => {
    setTimeout(() => {
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('site-content').style.display = 'block';
    }, 2000); // 2 seconds
};

// Fake Message Button
function sendMessage() {
    alert("📨 Thanks for reaching out! I'll ping you back in cyberspace! 🚀");
}

// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('clean');
});
