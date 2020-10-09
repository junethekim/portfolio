
function CaseStudy(){
    return (
        <div className="container">
            <div className="project row">
                <div className="col-sm-12 project-title">
                    <h2 className="main-title">Truffle - Elegance without Serif</h2>
                    <p className="label">2014</p>
                </div>
                <div className="col-sm-12 project-img">
                    <img src="assets/truffle.png" />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <h3>Truffle</h3>
                    <p>
                        Sans serif typefaces are the standard in typesetting now. We find sans serifs everywhere, like air. It’s
                        easy to find gorgeous, geometric sans serifs and composite them. However, Truffle is an elegant
                        geometric sans serif. Curves and letterforms are designed based on circular shapes to give elegance with
                        the clarity of a sans serif.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <h3>Low x-height</h3>
                    <p>
                        In general, people choose whether or not to buy something after trying it on. This action is the core of
                        the in-store experience. This project allows customers to complete their purchase in the fitting room,
                        and have a delightful experience doing it.
                    </p>
                </div>
                <div className="col-sm-6">
                    <img src="assets/x-height.gif"/>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6">
                    <h3>Circular Shapes</h3>
                    <p>
                        Truffle is designed based on the circular shapes found in kitchenware. The shapes of Truffle are
                        intended to be friendly—and to work with organic products such as foods—all while keeping the DNA of
                        geometric sans serif type.
                    </p>
                </div>
                <div className="col-sm-6">
                    <img src="assets/circular.gif"/>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6">
                    <h3>Curved Foot</h3>
                    <p>
                        Truffle has a curved foot on its “i”, “l”, “t”. That curvy foot add deliciousness to Truffle, keeping an
                        organic feeling within its geometric shapes.
                    </p>
                </div>
                <div className="col-sm-6">
                    <img src="assets/curvedfoot.gif"/>
                </div>
            </div>

            <div className="project row">
                <div className="vertical-space"></div>
                <div className="col-sm-12 project-title">
                    <h2 className="main-title">Truffle Italic</h2>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6">
                    <h3>Whimsical Curves</h3>
                    <p>
                        Whimsical curves are also a big characteristic of Truffle’s italic. Balance between whimsy and
                        modularization makes Truffle sweet in the right places.
                    </p>
                </div>
                <div className="col-sm-6">
                    <img src="assets/italic.gif"/>
                </div>
            </div>

            <div className="project row">
                <div className="vertical-space"></div>
                <div className="col-sm-12 project-title">
                    <h2 className="main-title">Glyphs</h2>
                </div>
                <div className="col-sm-12">
                    <img className="glyph" src="assets/glyphs-l.jpg"/>
                    <img className="glyph" src="assets/glyphs-r.jpg"/>
                    <img className="glyph" src="assets/glyphs-b.jpg"/>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12 row">
                    <div className="vertical-space"></div>
                    <a className="btn" href="assets/truffle.zip" download>Download Truffle</a>
                    <div className="vertical-space"></div>
                    <a className="previous col-sm-3" href="paypal_cc">PREVIOUS<br/><span className="label">PayPal Cash Card Enrollment</span></a>
                    <a className="next col-sm-3" href="carta_is">NEXT<br/><span className="label">Carta Investor experience redesign</span></a>
                </div>
            </div>
        </div>
    )
}


ReactDOM.render(
<CaseStudy />,
document.getElementById('root')
);