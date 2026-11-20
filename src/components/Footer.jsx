// NEW (Class 1): import the footer styles (.footer, and the .App / .main-content layout used in App.jsx)
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-bottom">
          {/* CHANGED (Class 1): mb-0 = margin-bottom 0 (removes the paragraph's default space under the text) */}
          <p className="mb-0">© 2026 My Online Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
