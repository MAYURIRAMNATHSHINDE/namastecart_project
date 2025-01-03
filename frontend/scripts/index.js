import { navbar,footer } from "./navbar.js";

let Header=document.querySelector(".header");
Header.innerHTML=navbar()
let footerCont=document.querySelector(".footer-cont");
footerCont.innerHTML=footer();

// ////////////////////////// Login Page ////////////////////////

const loginIcon = document.getElementById('login-icon');
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