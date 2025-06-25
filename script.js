// script.js

// Function to calculate reading time
function calculateReadingTime(text) {
    const wordsPerMinute = 200; // Average reading speed
    const words = text.split(/\s+/).filter(word => word.length > 0).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
}

// Function to display reading time
function displayReadingTime() {
    const bodyText = document.body.innerText; // Get the text content of the body
    const readingTime = calculateReadingTime(bodyText); // Calculate reading time

    // Create a new paragraph element to display the reading time
    const readingTimeElement = document.createElement('p');
    readingTimeElement.textContent = `Estimated reading time: ${readingTime} minute(s)`;
    readingTimeElement.style.fontWeight = 'bold'; // Make it bold
    readingTimeElement.style.position = 'fixed'; // Position it fixed
    readingTimeElement.style.bottom = '10px'; // Position from the bottom
    readingTimeElement.style.right = '10px'; // Position from the right
    readingTimeElement.style.backgroundColor = 'white'; // Background color
    readingTimeElement.style.padding = '10px'; // Padding
    readingTimeElement.style.border = '1px solid black'; // Border

    document.body.appendChild(readingTimeElement); // Append the element to the body
}

// Call the function to display reading time
displayReadingTime();
