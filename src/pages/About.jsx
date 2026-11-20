// the About page ( URL "/about" )
function About() {
    return (
        // text-center = center all the text inside
        <div className="text-center">
            <h1>About Us</h1>
            {/* lead = bigger, lighter paragraph text */}
            <p className="lead">We are a small online store built with React.</p>
        </div>
    );
}

export default About;
