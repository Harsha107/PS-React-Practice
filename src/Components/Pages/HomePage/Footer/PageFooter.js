import React from 'react';
import './PageFooterStyle.css'

const PageFooter = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>About Us</h3>
          </div>
          <div className="footer-column">
            <h3>Customer Service</h3>
            <ul>
              <li><a href='index.html' className='contact-us'>Contact Us</a></li>
              <li><a href='mailto:random@gmail.com' className='mailing'>random@gmail.com</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a target='' rel='norefferernoopener' href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiBptuYotT_AhXjxgIHHWgyDU4QFnoECAsQAQ&url=https%3A%2F%2Fwww.facebook.com%2Fhashgate%2F&usg=AOvVaw2TzdKnikU3jkSdh4MvFAGL&opi=89978449" className='fb-icon'>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a target='' rel='norefferernoopener' href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj9ksOzotT_AhXR_KQKHfb0BIgQFnoECBYQAQ&url=https%3A%2F%2Ftwitter.com%2Fhashgateae%3Flang%3Den&usg=AOvVaw1LLTyVZEq5jeBeYgnupiig&opi=89978449" className='twitter-icon'>
                <i className="fab fa-twitter"></i>
              </a>
              <a target='blank' rel='norefferernoopener' href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiogJDIotT_AhX6xQIHHZG2AVYQFnoECBcQAQ&url=https%3A%2F%2Fwww.instagram.com%2Fhashgate%2F%3Fhl%3Den&usg=AOvVaw3LmfRvBZK4Q20rxjf9hAg3&opi=89978449" className='istg-icon'>
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;