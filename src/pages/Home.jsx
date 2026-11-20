// the Home page ( URL "/" )
function Home() {
    return (
        // text-center = center all the text inside
        // py-5        = padding top + bottom size 5 (3rem = 48px), the biggest standard spacing
        <div className="text-center py-5">
            {/* display-4 = extra-large "display" heading. display-1 is the biggest, display-6 the smallest */}
            <h1 className="display-4">Welcome to my Online Store</h1>

            {/* lead           = bigger, lighter paragraph text, used for an intro line
                text-secondary = gray text */}
            <p className="lead text-secondary">Snacks, coffee and merch, all in one place.</p>

            {/* btn btn-dark = dark Bootstrap button | btn-lg = large button
                href="/catalog" = clicking it goes to the Catalog page */}
            <a className="btn btn-dark btn-lg" href="/catalog">Shop Now</a>
        </div>
    );
}

export default Home;
