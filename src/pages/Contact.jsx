// NEW (Class 1): the Contact page ( URL "/contact" )
function Contact() {
    return (
        // Bootstrap grid:
        //   row                    = a horizontal row of columns
        //   justify-content-center = center the columns inside the row
        <div className="row justify-content-center">
            {/* col-md-6 = on medium screens and up (768px+) this column takes 6 of 12 parts (half the width);
                on phones it takes the full width */}
            <div className="col-md-6">
                <h1>Contact Us</h1>
                {/* card card-body = a white bordered box with padding inside */}
                <div className="card card-body">
                    <p><strong>Email:</strong> store@mail.com</p>
                    <p><strong>Phone:</strong> (323) 232-2323</p>
                    {/* mb-0 = no bottom margin on the last line */}
                    <p className="mb-0"><strong>Hours:</strong> Mon-Fri, 9am-5pm</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
