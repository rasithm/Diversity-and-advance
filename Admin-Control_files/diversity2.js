document.addEventListener("DOMContentLoaded", function () {
    function setupToggle(buttonId, bodyId) {
        const button = document.getElementById(buttonId);
        const body = document.getElementById(bodyId);

        button.addEventListener("click", function () {
            if (body.classList.contains("open")) {
                // Close the section
                body.style.height = body.scrollHeight + "px"; // Set current height for smooth transition
                setTimeout(() => {
                    body.style.height = "0"; // Shrink height to 0
                }, 10);

                setTimeout(() => {
                    body.classList.remove("open");
                    body.style.display = "none"; // Remove display: flex
                }, 300); // Wait for animation to finish
            } else {
                // Open the section
                body.style.display = "flex"; // Set display before animation
                body.style.height = "0"; // Start from height 0
                setTimeout(() => {
                    body.classList.add("open");
                    body.style.height = body.scrollHeight + "px"; // Expand to full height
                }, 10);
            }

            // Toggle caret icon direction
            const icon = button.querySelector("i");
            icon.classList.toggle("fa-caret-down");
            icon.classList.toggle("fa-caret-right");
        });
    }

    // Apply toggle function to all collapsible sections
    setupToggle("open-fa-caret-right", "employement-body");
    setupToggle("open-education", "education-body");
    setupToggle("open-diversity", "diversity-body");
    setupToggle("open-additional", "additional-body");
});