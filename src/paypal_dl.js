
function CaseStudy(){
    return (
        <div className="container">
            <div className="container">
                <div className="project row">
                    <div className="col-sm-12 project-title">
                        <h2 className="main-title">PayPal Design System</h2>
                        <p className="label">2017 – 2018</p>
                    </div>
                    <div className="col-sm-12 project-img">
                        <img src="assets/dl_intro.png" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <h3>INTRO</h3>
                        <p>Nowadays PayPal is payment platform for 244 million users all over the world, PayPal design
                            team always wanted to provide intuitive experience to wide range of customers. Also, because
                            I was a designer in a product team for financially underserved segnment, I was always
                            interested in UX patterns for people who are not tech savvy.</p>

                        <h4>Scalable design patterns</h4>
                        <p>My responsibiliy was to work closely with our Consumer Experience Platform team and other
                            product teams for design patterns and components that is scalable. From our definitions, a
                            scalable design pattern should have enough flexibility so that design still can be used in
                            different contexts.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <h4>Progress meter</h4>
                        <p>For a PayPal Cash Card enrollment flow redesign project, I was looking for solutions to
                            increase our conversion rate. A progress meter was one of the solutions worked well in user
                            testing sessions. Since PayPal UI team was also exploring a progress meter pattern, we
                            decided to be a trailblazer for progress meter and did related user testings. Initial design
                            of the progress meter did not have a label for remaining steps and current step. But, user
                            testing results were consistently told us that user always want to know more about where
                            they are and how many steps they have.<br/>After enrollment flow redesign along with
                            progress meter, we increased the conversion rate from 56% to 66%.</p>
                    </div>
                    <div className="col-sm-6">
                        <img src="assets/progress_meter.png"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <h4>Money Tiles</h4>
                        <p>In early 2018, for better scalability, Consumer Experience Platform team initated web and
                            mobile home page redesign and I was been involved as a design representative of our product
                            team. During the design working sessions with other product teams and the platform team, we
                            realized the amount of information on the home page could be overwhelming if a customer
                            engages more with PayPal. Therefore, I worked with designers from other product teams to run
                            user testing sessions and design jams to design a UX pattern that could work in different
                            contexts.</p>
                    </div>
                    <div className="col-sm-6">
                        <img src="assets/money_tile.png"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12 row">
                        <div className="vertical-space"></div>
                        <a className="previous col-sm-3" href="paypal_cashio">PREVIOUS<br/><span className="label">PayPal Cash in & Out</span></a>
                        <a className="next col-sm-3" href="paypal_cc">NEXT<br/><span className="label">PayPal Cash Card Enrollment</span></a>
                    </div>
                </div>
            </div>
        </div>

        )
}


ReactDOM.render(
    <CaseStudy />,
    document.getElementById('root'));