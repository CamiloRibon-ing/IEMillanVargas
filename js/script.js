// This file contains JavaScript functionality for the educational landing page.

// Function to toggle the navigation menu on smaller screens
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}

// Event listener for the menu button
document.getElementById('menu-button').addEventListener('click', toggleMenu);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to display the latest updates
function displayLatestUpdates(updates) {
    const updatesContainer = document.getElementById('latest-updates');
    updates.forEach(update => {
        const updateElement = document.createElement('div');
        updateElement.classList.add('update');
        updateElement.innerHTML = `<h3>${update.title}</h3><p>${update.description}</p>`;
        updatesContainer.appendChild(updateElement);
    });
}

// Sample data for latest updates
const latestUpdates = [
    { title: 'New Course Launch', description: 'We are excited to announce the launch of our new course on Web Development.' },
    { title: 'Upcoming Webinar', description: 'Join us for a webinar on Educational Technology on March 15th.' },
];

// Call the function to display updates on page load
window.onload = function() {
    displayLatestUpdates(latestUpdates);
};