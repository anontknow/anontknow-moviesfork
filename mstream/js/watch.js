// js/watch.js

document.addEventListener('DOMContentLoaded', () => {
    const videoFrame = document.getElementById('video-frame');
    const serverButtonsContainer = document.getElementById('server-buttons');

    // Get movie/TV show details from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const id = urlParams.get('id');

    if (!type || !id) {
        videoFrame.style.display = 'none';
        serverButtonsContainer.innerHTML = '<p>Error: Could not load video. Information missing.</p>';
        return;
    }

    // Define the list of available servers
    const servers = [
        { name: 'VidSrc', url: `https://vidsrc.cc/v2/embed/${type}/${id}` },
        { name: 'VidSrc.me', url: `https://vidsrc.net/embed/${type}/?tmdb=${id}` },
        { name: 'Videasy', url: `https://player.videasy.net/${type}/${id}` }
        // You can add more servers here in the future
    ];

    // Function to load a video into the iframe
    function loadVideo(url) {
        videoFrame.src = url;
    }

    // Generate server buttons
    servers.forEach((server, index) => {
        const button = document.createElement('button');
        button.className = 'server-btn';
        button.innerText = server.name;

        button.addEventListener('click', () => {
            loadVideo(server.url);
            // Update active state for buttons
            document.querySelectorAll('.server-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });

        serverButtonsContainer.appendChild(button);

        // Load the first server by default
        if (index === 0) {
            loadVideo(server.url);
            button.classList.add('active');
        }
    });
});