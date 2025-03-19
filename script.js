function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
}

// Smooth scrolling behavior
function enableSmoothScrolling() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Filter projects based on selected category
function filterProjects() {
    const filter = document.getElementById('project-filter').value;
    const projects = document.querySelectorAll('#projects article');
    projects.forEach(project => {
        if (filter === 'all' || project.getAttribute('data-category') === filter) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Open modal and display image
function openModal(element) {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('img01');
    modal.style.display = 'block';
    modalImg.src = element.src;
}

// Close the modal
function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Form validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    let valid = true;

    if (!name) {
        document.getElementById('nameError').textContent = 'Name is required.';
        valid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required.';
        valid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    if (!message) {
        document.getElementById('messageError').textContent = 'Message is required.';
        valid = false;
    } else {
        document.getElementById('messageError').textContent = '';
    }

    if (valid) {
        alert('Message sent successfully!');
    }

    return valid;
}

// Real-time validation
function enableRealTimeValidation() {
    document.getElementById('name').addEventListener('input', function() {
        if (this.value) {
            document.getElementById('nameError').textContent = '';
        }
    });

    document.getElementById('email').addEventListener('input', function() {
        if (this.value) {
            document.getElementById('emailError').textContent = '';
        }
    });

    document.getElementById('message').addEventListener('input', function() {
        if (this.value) {
            document.getElementById('messageError').textContent = '';
        }
    });
}

// Initialize functions
document.addEventListener('DOMContentLoaded', function() {
    enableSmoothScrolling();
    enableRealTimeValidation();
});
