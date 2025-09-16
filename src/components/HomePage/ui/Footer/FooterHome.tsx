import LogoSVG from "../../../../assets/HeaderAssets/LogoSVG/LogoSVG";
import "../Footer/FooterHome.css";

const FooterHome = () => {
  return (
    <footer className="footer">
      <div className="footer-left-block">
        <div className="footer-title-block">
          <LogoSVG width="60" height="60" />
          <p className="footer-title">WIS</p>
        </div>

        <p className="footer-description">
          Push through the pain; Every single day
        </p>
      </div>
      <div className="footer-right-block">
        <div className="links-block">
          <h3>COMPANY</h3>
          <a className="footer-link" href="#">
            About
          </a>
          <a className="footer-link" href="#">
            Contact us
          </a>
          <a className="footer-link" href="#">
            Support
          </a>
          <a className="footer-link" href="#">
            Careers
          </a>
        </div>
        <div className="links-block">
          <h3>Help</h3>
          <a className="footer-link" href="#">
            Privacy Policy
          </a>
          <a className="footer-link" href="#">
            Cookie Policy
          </a>
          <a className="footer-link" href="#">
            Terms & Conditions
          </a>
          <a className="footer-link" href="#">
            Share Location
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterHome;
