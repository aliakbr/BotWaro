document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var vid = document.getElementById("background_video");
vid.videoHeight; // returns the intrinsic height of the video
vid.videoWidth; // returns the intrinsic width of the video
