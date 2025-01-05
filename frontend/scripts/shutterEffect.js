import { navbar } from "./navbar.js";
navbar()

const menuItems = document.querySelectorAll('.menu-item');
const dropdown = document.querySelector('.dropdown');
let timeout; // To track the timeout for hiding

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('mouseover', () => {
    clearTimeout(timeout); // Cancel any previous hide timeout
    dropdown.classList.add('show');
    dropdown.style.display = 'block'; // Ensure dropdown is visible
  });

  menuItem.addEventListener('mouseout', () => {
    timeout = setTimeout(() => {
      dropdown.classList.remove('show');
      dropdown.style.display = 'none';
    }, 200); // Small delay to allow hover on dropdown
  });
});

dropdown.addEventListener('mouseover', () => {
  clearTimeout(timeout); // Cancel hide timeout when hovering over dropdown
  dropdown.classList.add('show');
  dropdown.style.display = 'block';
});

dropdown.addEventListener('mouseout', () => {
  timeout = setTimeout(() => {
    dropdown.classList.remove('show');
    dropdown.style.display = 'none';
  }, 200); // Small delay before hiding
});

    
// /////////////////////////////////////////////////////////////////////