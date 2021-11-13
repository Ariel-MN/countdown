/* Load the video in the specified position */
function loadVideo(time) {
    var video=document.getElementById("js-vid");

    // Check if video is already loaded
    if (!video.firstChild) {
    
        // Video length in seconds
        var videoLength=67;

        // Load the video
        let s=document.createElement('source');
        s.setAttribute('src',video.getAttribute('data-src')+'#t='+String(videoLength-time));
        s.setAttribute('type',video.getAttribute('data-type'));
        video.appendChild(s);
    }
}