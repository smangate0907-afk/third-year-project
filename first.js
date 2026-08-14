// 1. DOM ELEMENT SELECTION
// Target the video element from the layout DOM
const video = document.getElementById('preload-video');
let pageLoaded = false;

// Ensure the video does not loop natively 
if (video) {
    video.loop = false;
}

// 2. NETWORK PROGRESS MONITOR
// Fires automatically when the next page resources are completely buffered/loaded
window.addEventListener('load', () => {
    pageLoaded = true;
});

// 3. ANIMATION TIMING ENGINE
// Tracks playback and triggers the redirect immediately when the video finishes
if (video) {
    video.addEventListener('ended', () => {
        video.pause(); // Freeze video to prevent frame jumping or flashing
        
        // REDIRECTION ROUTE: Replace with your destination web file
        window.location.href = "../2nd page/3slide.html";
    });
}