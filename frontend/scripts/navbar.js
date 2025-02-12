export const navbar = () => {
  return `<div class="empty">
            <p>Members lace up our newest run-to-train shoe first, starting January 2—only on the app.<u>Download the
                    App</u></p>
        </div>
    
        <div class="logo">
            <img src="./frontend/assets/Edited_Namaste Cart_just_logo.png" alt="logo image">
            <h1><span style="color: rgb(195,100,119);">Namaste</span><span style="color: rgb(33,133,131);">Cart</span></h1>
        </div>
    
        <nav class="navbar">
    
            <ul class="menu">
                <li class="menu-item">Women</li>
                <li class="menu-item">Men</li>
                <li class="menu-item">Accessories</li>
                <li class="menu-item">Kids</li>
                <li class="menu-item">What's New</li>
                <li class="menu-item" style="color: red;">New Year Scores</li>
            </ul>
    
            <div class="search-bar">
                <input type="text" placeholder="  Search on NamasteCart...">
            </div>
             <div class="icons">
        <div class="dropdown-container">
            <img id="login-icon" src="./frontend/assets/Login1.png" alt="login image" style="width: 25px; height:25px;" onclick="redirectToLogin()">
            <div class="dropdownofProfile" id="dropdown-menu">
                <a href="./frontend/profile.html" style="color:gray;">Profile</a>
                <a href="./orders.html" style="color:gray;">Orders</a>
                <a href="./wishlist.html" style="color:gray;">Wishlist</a>
                <a href="./gift-cards.html" style="color:gray;">Gift Cards</a>
                <a href="./contact-us.html" style="color:gray;">Contact Us</a>
                <a href="./saved-addresses.html" style="color:gray;">Saved Addresses</a>
                <a href="./edit-profile.html" style="color:gray;">Edit Profile</a>
                <a href="./logout.html" style="color:gray;">Logout</a>
            </div>
        </div>
        <img src="./frontend/assets/wishlist.png" alt="wishlist image" id="wishlist-nav" style="width: 25px; height:25px;" onclick="redirectToWishlist()">
        <img src="./frontend/assets/AddToCart.png" alt="add to cart image" id="cart-nav" style="width: 25px; height:25px;" onclick="redirectToCart()">
    </div>
    
        </nav>
        <div class="dropdown">
            <div class="section">
              <h3>New Year Scores</h3>
              <ul>
              <li><a href="./frontend/dresses.html">What's New</a></li>
              <li><a href="./frontend/dresses.html">Bestsellers</a></li> 
              <li><a href="./frontend/dresses.html">Align Shop</a></li> 
              <li><a href="./frontend/dresses.html">Travel Clothes</a></li>  
                
              </ul>
            </div>
            <div class="section">
              <h3>Women's Clothes</h3>
              <ul>
                <li><a href="./frontend/dresses.html">Dresses</a></li>
                <li><a href="dresses.html">Bodysuits</a></li>
                <li><a href="dresses.html">Dresses</a></li>
                <li><a href="dresses.html">Leggings</a></li>
                <li><a href="dresses.html">Dresses</a></li>
              </ul>
            </div>
            <div class="section">
              <h3>Accessories</h3>
              <ul>
                <li><a href="dresses.html">Backpacks</a></li>
                <li><a href="dresses.html">Bags</a></li>
                <li><a href="dresses.html">Bags</a></li>
                <li><a href="dresses.html">Yoga Mats</a></li>
              </ul>
            </div>
          </div>`;
};



export const footer = () => {
  return `<footer class="footer">
        <div class="footer-section">
            <h4>About Us</h4>
            <ul>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Stores Near Me</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h4>Help</h4>
            <ul>
                <li><a href="#">Order Tracking</a></li>
                <li><a href="#">Returns / Refunds / Exchanges Policy</a></li>
                <li><a href="#">Return/Exchange</a></li>
                <li><a href="#">Shipping Policy</a></li>
                <li><a href="#">International Shipping</a></li>
                <li><a href="#">Sitemap</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h4>Rewards & Benefits</h4>
            <ul>
                <li><a href="#">NamasteCart Rewards Program</a></li>
                <li><a href="#">Refer & Earn</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h4>Address</h4>
            <p>NamasteCart Private Limited<br>
                No. 145, UrbanVault,<br>
                5th Main Rd, Sector 6,<br>
                HSR Layout,<br>
                Bengaluru, Karnataka 560102<br>
                CIN - U52520KA2020PTC133220</p>
            <p>In case of queries email us at:<br>
                <a href="mailto:hi@myblissclub.in">hi@myblissclub.in</a>
            </p>
        </div>
    
    </footer>
    <footer class="footer1">
        <div class="footer-container">
          <div class="navigation-links">
            
            <select style="font-size: 16px;
            margin-bottom: 10px;
            color: #2b4a42; width:690px">
              <option><span style="font-size: 30px;">Navigation Links</span></option>
              <option value="about">About Us</option>
              <option value="contact">Contact Us</option>
              <option value="help">Help</option>
              <option value="terms">Terms & Conditions</option>
            </select>
          </div>
          <div class="social-icons">
            <a href="#" id="Facebook"><img src="./frontend/assets/facebook.png" alt="facebook image" style="width: 25px;
            height: 25px;"></a>
            <a href="#" id="Twitter"><img src="./frontend/assets/twitter.png" alt="twitter image"></a>
            <a href="#" id="Instagram"><img src="./frontend/assets/youtube.png" alt="youTube image"></a>
            <a href="#" id="YouTube"><img src="./frontend/assets/instagram.png" alt="instagram image"></a>
            <a href="#" is="WhatsApp"><img src="./frontend/assets/what'sApp.png" alt="what'sApp image" style="width: 28px;
                height: 28px;"></a>
          </div>
          <div class="copyright">
            <p>© 2024, NamasteCart</p>
          </div>
        </div>
      </footer> `;
};
navbar()
footer()

