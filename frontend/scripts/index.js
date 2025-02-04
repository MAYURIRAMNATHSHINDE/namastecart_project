import { navbar, footer } from "./frontend/navbar.js";



// let Header=document.querySelector(".Header");
// Header.innerHTML=navbar()
// let footerCont=document.querySelector(".footer-cont");
// footerCont.innerHTML=footer();

//navbar()

document.addEventListener("DOMContentLoaded", () => {
    const Header = document.querySelector(".Header");
    if (Header) {
        Header.innerHTML = navbar(); // Assuming `navbar` is a function from "navbar.js"
    } else {
        console.error("Header element not found.");
    }

    const footerCont = document.querySelector(".footer-cont");
    if (footerCont) {
        footerCont.innerHTML = footer(); // Assuming `footer` is a function from "navbar.js"
    } else {
        console.error("Footer container element not found.");
    }
});

 
  
// ////////////////////////// Login Page ////////////////////////
const loginIcon = document.querySelector('#login-icon');
        const dropdownMenu = document.getElementById('dropdown-menu');

        // Show the dropdown on mouseover
        loginIcon.addEventListener('mouseover', () => {
            dropdownMenu.style.display = 'block';
        });

        // Keep the dropdown visible when hovering over it
        dropdownMenu.addEventListener('mouseover', () => {
            dropdownMenu.style.display = 'block';
        });

        // Hide the dropdown when the mouse leaves both the icon and dropdown
        loginIcon.addEventListener('mouseout', () => {
            setTimeout(() => {
                if (!dropdownMenu.matches(':hover')) {
                    dropdownMenu.style.display = 'none';
                }
            }, 3000); // Small delay to handle mouse transition
        });

        dropdownMenu.addEventListener('mouseout', () => {
            setTimeout(() => {
                if (!loginIcon.matches(':hover')) {
                    dropdownMenu.style.display = 'none';
                }
            }, 3000); // Small delay to handle mouse transition
        });

     /////////////////////////////////////////////////////////////////////////

     