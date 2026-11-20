// Import section
import "./Navbar.css";

// Logic section
function Navbar() {
    // Bootstrap classes on <nav>:
    //   navbar           = turns this into a Bootstrap navigation bar
    //   navbar-expand-lg = show the links in a row on large screens (lg = 992px and wider);
    //                      on smaller screens they collapse behind the hamburger button
    //   bg-dark          = dark background
    //   data-bs-theme="dark" = tells Bootstrap the bar is dark, so the text and icons turn light
    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            {/* container-fluid = full-width box with a little padding on the sides */}
            <div className="container-fluid">
                {/* navbar-brand = the store name on the left, bigger text */}
                <a className="navbar-brand" href="/">Online Store</a>

                {/* the "hamburger" button that only shows on small screens.
                    navbar-toggler    = Bootstrap's menu button style
                    data-bs-toggle    = "collapse" -> clicking it opens/closes something
                    data-bs-target    = WHICH thing: the element with id="navbarNav" below
                    aria-* attributes = describe the button for screen readers */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    {/* navbar-toggler-icon = the 3-line hamburger icon */}
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* collapse navbar-collapse = the part that hides on small screens and opens with the button.
                    id="navbarNav" must match data-bs-target above */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    {/* navbar-nav = list of links laid out for a navbar
                        nav-item   = one item in that list
                        nav-link   = link styling (light text because of data-bs-theme="dark") */}
                    <ul className="navbar-nav">
                        {/* each link: href = the URL it opens; App.jsx decides which page shows for that URL */}
                        <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/catalog">Catalog</a></li>
                        <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

// Export section
export default Navbar;
