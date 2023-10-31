  import "./footer.css";
  import React from "react";
  const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-social-media">
          <div className="footer-social-medai-text">Follow us on social media</div>
          <div className="footer-social-media-icons">
            <div className="footer-social-media-icon">
              <i style={{ color: "#c0392b" }} className="bi bi-instagram"></i>
            </div>
            <div className="footer-social-media-icon">
              <i style={{ color: "blue" }} className="bi bi-telegram"></i>
            </div>
            <div className="footer-social-media-icon">
              <i style={{ color: "#2980b9" }} className="bi bi-facebook"></i>
            </div>
            <div className="footer-social-media-icon">
              <i style={{ color: "red" }} className="bi bi-youtube"></i>
            </div>
            <div className="footer-social-media-icon">
              <i style={{ color: "skyblue" }} className="bi bi-twitter"></i>
            </div>
          </div>
        </div>
        <div className="footer-links-wrapper">
          <div className="footer-links-item">
            <h3 className="footer-links-item-title">Usefull Links</h3>
            <ul className="footer-links">
              <li className="footer-link" ><a href="/" style={{textDecoration:"none",color:'white'}}>Home</a> </li>
              <li className="footer-link"><a href="/authors" style={{textDecoration:"none",color:'white'}}>Authors</a></li>
              {/* <li className="footer-link"><a href="/" style={{textDecoration:"none",color:'white'}}></a>Blog</li> */}
              <li className="footer-link"><a href="/about" style={{textDecoration:"none",color:'white'}}>About Us</a></li>
              <li className="footer-link"><a href="/contact" style={{textDecoration:"none",color:'white'}}>Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-links-item">
            <h3 className="footer-links-item-title">Contact Information</h3>
            <div className="footer-address-wrapper">
              <div className="footer-address-item">
                <i className="bi bi-geo-alt-fill"></i>
                  No-67,Avinashi Road, Coimbatore,Tamil Nadu
              </div>
              <div className="footer-address-item">
                <i className="bi bi-telephone-fill"></i>
                +91 9841230422
              </div>
              <div className="footer-address-item">
                <i className="bi bi-envelope-fill"></i>
                onlinebookstore@gmail.com
              </div>
            </div>
          </div>
          <div className="footer-links-item">
            <h3 className="footer-links-item-title">About Us</h3>
            <p className="footer-description">
            Welcome to Online Book Store, your dedicated online destination for an 
            extensive collection of ebooks. We are passionate about making reading 
            accessible, convenient, and enjoyable for book enthusiasts worldwide.
            </p>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;
