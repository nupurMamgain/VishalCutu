const no = document.getElementById('no');
const yes = document.getElementById('onclick');
const mainContent = document.getElementById('main-content');
const message = document.getElementById('message');

no.addEventListener("mouseover", () => {
    no.style.position = 'fixed'; 

    const gif = document.querySelector(".valentine-gif");
    const gifRect = gif.getBoundingClientRect(); // Get cat's position

    let x, y;
    let overlap = true;

    // Keep calculating a new position until it doesn't overlap the GIF
    while (overlap) {
        x = Math.floor(Math.random() * (window.innerWidth - no.offsetWidth));
        y = Math.floor(Math.random() * (window.innerHeight - no.offsetHeight));

        // Check if the new X and Y coordinates are inside the GIF's area
        const padding = 20; // Extra buffer space
        const isOverlapping = (
            x < gifRect.right + padding &&
            x + no.offsetWidth > gifRect.left - padding &&
            y < gifRect.bottom + padding &&
            y + no.offsetHeight > gifRect.top - padding
        );

        if (!isOverlapping) {
            overlap = false;
        }
    }

    no.style.left = `${x}px`;
    no.style.top = `${y}px`;
});
// The Success Screen Logic
yes.addEventListener('click', () => {
    mainContent.classList.add('hidden'); // Hide the question and buttons
    message.classList.remove('hidden');  // Show the love message
});