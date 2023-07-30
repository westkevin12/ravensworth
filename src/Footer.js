import React from 'react';

function Footer() {
  return (
    <footer>
      <div>
        <h3>Follow us on social media:</h3>
        <ul>
          <li><a href="https://www.facebook.com/">Facebook</a></li>
          <li><a href="https://www.twitter.com/">Twitter</a></li>
          <li><a href="https://www.instagram.com/">Instagram</a></li>
          {/* Add more social media links as needed */}
        </ul>
      </div>
      <div>
        <h3>Contact Information:</h3>
        <p>Email: example@example.com</p>
        <p>Phone: +1 123-456-7890</p>
        {/* Add more contact information as needed */}
      </div>
      <div>
        <p>&copy; {new Date().getFullYear()} Your WebApp Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
