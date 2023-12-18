document.addEventListener('DOMContentLoaded', function() {
    // Get all the navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    // Retrieve the active link from session storage
    const activeLink = sessionStorage.getItem('activeLink');

    // Add click event listeners to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevent the default behavior of anchor links
            event.preventDefault();

            // Remove the "active" class from all links
            navLinks.forEach(otherLink => {
                otherLink.classList.remove('active');
            });

            // Add the "active" class to the clicked link
            this.classList.add('active');

            // Store the active link in session storage
            sessionStorage.setItem('activeLink', this.getAttribute('href'));

            // Manually navigate to the link's href
            const targetHref = this.getAttribute('href');
            if (targetHref) {
                window.location.href = targetHref;
            }
        });

        // Apply the "active" class on page load if the link is stored in session storage
        if (activeLink && link.getAttribute('href') === activeLink) {
            link.classList.add('active');
        }
    });
});
