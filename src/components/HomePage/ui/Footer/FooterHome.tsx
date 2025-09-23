import "../Footer/FooterHome.css";

// rewrite titels like footer-link
// add font for WIS and others
// more darkness 

const FooterHome = () => {
  return (
    <footer className="footer-home">
      <div className="footer-container">
        <div className="footer-top-section">
          <div className="footer-text-content">
            <p className="text-5xl font-extrabold m-0">WIS</p>
            <p className="text-lg font-light m-0 ">
              Discover the world of sneakers!
            </p>
          </div>
        </div>

        <div className="footer-link-section">
          <div className="footer-grid-section">
            <h3 className="footer-section-title">About us</h3>
            <a className="footer-link" href="#">
              Our Story
            </a>
            <a className="footer-link" href="#">
              Meet the Team
            </a>
            <a className="footer-link" href="#">
              Contact Us
            </a>
          </div>

          <div className="footer-grid-section">
            <h3 className="footer-section-title">Developers</h3>
            <a className="footer-link" href="#">
              API Documentation
            </a>
            <a className="footer-link" href="#">
              Join Our Team
            </a>
            <a className="footer-link" href="#">
              Open Source
            </a>
          </div>

          <div className="footer-grid-section">
            <h3 className="footer-section-title">Explore</h3>
            <a className="footer-link" href="#">
              Trending sneakers
            </a>
            <a className="footer-link" href="#">
              Browse by style
            </a>
            <a className="footer-link" href="#">
              Latest Reviews
            </a>
          </div>

          <div className="footer-grid-section">
            <h3 className="footer-section-title">Support</h3>
            <a className="footer-link" href="#">
              FAQ
            </a>
            <a className="footer-link" href="#">
              Privacy Policy
            </a>
            <a className="footer-link" href="#">
              Terms of Service
            </a>
          </div>
        </div>

        <div className="footer-bottom-section">
          <p className="footer-copyright">
            © 2025 "What is shoes?". All rights reserved.
          </p>
          <div className="footer-socials">
            <a href="#" className="footer-social-link">
              Instagram
            </a>
            <a href="#" className="footer-social-link">
              Twitter
            </a>
            <a href="#" className="footer-social-link">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterHome;
