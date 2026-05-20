const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

function showMailAlert() {
    // Find the alert element
    const alertBox = document.getElementById('mailAlert');
    
    // Remove the 'd-none' class (which hides it) 
    alertBox.classList.remove('d-none');
    
    // Add the 'show' class to trigger Bootstrap's fade-in animation
    alertBox.classList.add('show');
    
    // Optional: Automatically hide the alert after 4 seconds
    setTimeout(() => {
        alertBox.classList.remove('show');
        alertBox.classList.add('d-none');
    }, 4000);
}