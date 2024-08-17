document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('loading-video');

    video.addEventListener('ended', () => {
        window.location.href = 'information.html';
    });
});
