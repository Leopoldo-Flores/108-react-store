// NEW (Class 1): the 404 page. App.jsx shows it for any URL that has no Route (path='*')
function NotFound() {
    return (
        // text-center = center the text | py-5 = padding top + bottom size 5 (48px)
        <div className="text-center py-5">
            {/* display-1 = the BIGGEST display heading size */}
            <h1 className="display-1">404</h1>
            <h2>Page Not Found</h2>
            {/* text-secondary = gray text */}
            <p className="text-secondary">The page you are looking for does not exist.</p>
            {/* btn btn-dark = dark button | href="/" = goes back to the Home page */}
            <a className="btn btn-dark" href="/">Back to Home</a>
        </div>
    );
}

export default NotFound;
