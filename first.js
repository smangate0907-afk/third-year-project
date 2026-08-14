// Target the video element from the layout DOM
const video = document.getElementById('preload-video');
let pageLoaded = false;

/**
 * 1. NETWORK PROGRESS MONITOR
 * Fires automatically when the next page resources (images, style sheets, 
 * scripts, and layout elements) are completely buffered/loaded.
 */
window.addEventListener('load', () => {
  pageLoaded = true;
});

/**
 * 2. ANIMATION TIMING ENGINE
 * Continuously calculates the video playback position as it updates.
 */
video.addEventListener('timeupdate', () => {
  // Flag active within the last 100 milliseconds of the current playback cycle
  const isNearEnd = video.currentTime >= (video.duration - 0.1);
  
  if (isNearEnd) {
    // If the background page assets have finished downloading, execute the transition
    if (pageLoaded) {
      video.pause(); // Freeze video to prevent frame jumping or flashing
      
      // REDIRECTION ROUTE: Replace 'home.html' with your destination web file
      window.location.href = "../2nd page/index.html"; 
    }
    // If pageLoaded is false (slow net), code block ignores the redirection 
    // and letting the video loop cleanly using native browser settings.
  }
});
