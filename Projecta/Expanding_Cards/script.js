// Bring all the panel elements into a node list
const panels = document.querySelectorAll('.panel');

// Loop through the panels
panels.forEach((panel) => {
    // Add an event listener to each panel
    panel.addEventListener('click', () => {
        // Remove the active class from all panels
        removeActiveClasses();
        // Add the active class to the clicked panel
        panel.classList.add('active');
    });
});

// Function to remove the active class from all panels
function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}