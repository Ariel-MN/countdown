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

/* Fullscreen mode */
function requestFullScreen() {
    // Make the body go full screen.
    var element = document.body;

    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }

    // Hide fullscreen button
    if (requestMethod || wscript) {
        document.getElementById("fullscreen").style.display="none";
    }
}