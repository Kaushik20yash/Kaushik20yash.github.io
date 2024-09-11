// Tab switching functionality
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        // Show the selected tab content
        document.getElementById(button.getAttribute('data-tab')).classList.add('active');
    });
}); 