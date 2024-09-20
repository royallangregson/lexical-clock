// Function to hide all elements with the 'words' class
function hideAllWords() {
    document.querySelectorAll('.words').forEach((word) => {
        word.setAttribute('aria-hidden', 'true');
        word.classList.add('hidden');
    });
}

// Function to show a specific element
function showElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.setAttribute('aria-hidden', 'false');
        element.classList.remove('hidden');
    }
}

// Function to get the nearest 5-minute increment
function getRoundedMinutes(minutes) {
    // Round to nearest 5
    return Math.round(minutes / 5) * 5;
}

// Function to update the clock display based on the current time
function updateClock() {
    // Get the current time
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    
    // Clear all words initially
    hideAllWords();

    // Always show 'it is'
    showElement('#it-is');

    // Determine which minute to show
    const roundedMinutes = getRoundedMinutes(minutes);

    if (roundedMinutes === 0) {
        // Exact hour, no minute to display
        showElement('[data-minute="0"]'); // Show nothing specific for minutes
    } else if (roundedMinutes === 30) {
        // Special case for "half past"
        showElement('[data-minute="30"]');
        showElement('#past');
    } else if (roundedMinutes > 0 && roundedMinutes < 30) {
        // Show minutes past the hour
        showElement(`[data-minute="${roundedMinutes}"]`);
        showElement('#past');
    } else if (roundedMinutes > 30 && roundedMinutes < 60) {
        // Show minutes till the next hour
        showElement(`[data-minute="${60 - roundedMinutes}"]`);
        showElement('#till');
        hours += 1; // Show the next hour when it's "till"
    }

    // Handle wrapping hours (12-hour format)
    if (hours > 12) {
        hours -= 12;
    } else if (hours === 0) {
        hours = 12; // Midnight case
    }

    // Show the appropriate hour word
    showElement(`[data-hour="${hours}"]`);

    // Show AM/PM
    if (now.getHours() >= 12) {
        showElement('#pm');
    } else {
        showElement('#am');
    }
}

// Function to update the clock every second
function startClock() {
    updateClock(); // Initial update
    setInterval(updateClock, 1000); // Update every second
}

// Start the clock when the page loads
document.addEventListener('DOMContentLoaded', startClock);
