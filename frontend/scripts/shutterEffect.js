import { navbar } from "./navbar.js";
navbar()

const menuItems = document.querySelectorAll('.menu-item');
    const dropdown = document.querySelector('.dropdown');
    
    menuItems.forEach((menuItem) => {
      menuItem.addEventListener('mouseover', () => {
        dropdown.classList.add('show');
      });
    
      menuItem.addEventListener('mouseout', () => {
        dropdown.classList.remove('show');
      });
    });
    
    dropdown.addEventListener('mouseover', () => {
      dropdown.classList.add('show');
    });
    
    dropdown.addEventListener('mouseout', () => {
      dropdown.classList.remove('show');
    });
    

   