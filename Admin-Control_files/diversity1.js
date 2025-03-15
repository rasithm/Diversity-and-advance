document.addEventListener("DOMContentLoaded", function () {
    const openBox = document.getElementById('open-fa-caret-right');
const employementBody = document.getElementById('employement-body');

openBox.addEventListener('click', () => {
    const rRight = document.getElementById('r-right')
    if (employementBody.style.display === 'none' || employementBody.style.display === '') {
        employementBody.style.display = 'flex';
        // rRight.style.height = '1300px' 
    } else {
        employementBody.style.display = 'none';
    }
});



const openBoxEducation = document.getElementById('open-education');
const educationBody = document.getElementById('education-body');

openBoxEducation.addEventListener('click', () => {
    const rRight = document.getElementById('r-right')
    if (educationBody.style.display === 'none' || educationBody.style.display === '') {
        educationBody.style.display = 'flex'; 
        // rRight.style.height = '1500px' 
    } else {
        educationBody.style.display = 'none';
        
    }
});





const openBoxDiversity = document.getElementById('open-diversity');
const diversityBody = document.getElementById('diversity-body');

openBoxDiversity.addEventListener('click', () => {
    const rRight = document.getElementById('r-right')
    if (diversityBody.style.display === 'none' || diversityBody.style.display === '') {
        // rRight.style.height = '1800px'
        diversityBody.style.display = 'flex'; 
    } else {
        diversityBody.style.display = 'none';
        // rRight.style.height = '1500px'
    }
});


const openBoxAdditional = document.getElementById('open-additional');
const additionalBody = document.getElementById('additional-body');

openBoxAdditional.addEventListener('click', () => {
    const rRight = document.getElementById('r-right')
    if (additionalBody.style.display === 'none' || additionalBody.style.display === '') {
        // rRight.style.height = '1800px'
        additionalBody.style.display = 'flex'; 
    } else {
        additionalBody.style.display = 'none';
        // rRight.style.height = '1500px'
    }
});
    // Function to toggle sections smoothly
    function setupToggle(buttonId, bodyId) {
        const button = document.getElementById(buttonId);
        const body = document.getElementById(bodyId);

        button.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent event conflicts

            // Toggle 'open' class for smooth expansion/collapse
            body.classList.toggle("open");

            // Change caret icon direction dynamically
            const icon = button.querySelector("i");
            if (body.classList.contains("open")) {
                icon.classList.remove("fa-caret-right");
                icon.classList.add("fa-caret-down");
            } else {
                icon.classList.remove("fa-caret-down");
                icon.classList.add("fa-caret-right");
            }
        });
    }

    // Apply toggle function to all collapsible sections
    setupToggle("open-fa-caret-right", "employement-body");
    setupToggle("open-education", "education-body");
    setupToggle("open-diversity", "diversity-body");
    setupToggle("open-additional", "additional-body");

    // Handle selection in education level
    const candidates = document.querySelectorAll(".select-candidate-edu");

    // Mapping text values to valid class names
    const classMap = {
        "10th": "tenth",
        "12th": "twelfth",
        "UG": "ug",
        "PG": "pg",
        "Diplomo": "diplomo",
        "PHD": "phd"
    };

    candidates.forEach(candidate => {
        candidate.addEventListener("click", function () {
            const selectedText = this.textContent.trim(); // Get text content
            const targetClass = classMap[selectedText]; // Convert text to corresponding class name

            if (targetClass) {
                const targetDiv = document.querySelector(`.${targetClass}`); // Find the matching input div

                if (targetDiv) {
                    this.classList.toggle("active"); // Toggle selection

                    // Show or hide the matching input field
                    if (this.classList.contains("active")) {
                        targetDiv.style.display = "flex"; // Show input
                    } else {
                        targetDiv.style.display = "none"; // Hide input
                    }
                }
            }
        });
    });

    // Handle multi-selection in other areas (e.g., gender, verification)
    const selectableElements = document.querySelectorAll(".select-candidate");
    
    selectableElements.forEach(element => {
        element.addEventListener("click", function () {
            this.classList.toggle("active"); // Toggle the active class
        });
    });
});