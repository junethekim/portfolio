
function ProjectRow(){
    return (
            <div className="container">
                <div className="project row">
                    <div className="col-sm-12 project-title">
                        <h2 className="main-title">PayPal Cash Card Enrollment</h2>
                        <p className="label">2018</p>
                    </div>
                    <div className="col-sm-12 project-img">
                        <img src="assets/ppcc_enrollment_intro.png" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <h3>PROBLEM</h3>
                        <p>
                            At PayPal, we were launching <a href="https://www.paypal.com/webapps/mpp/cash-card"
                                                            target="_blank">PayPal Cash Card</a> to provide customers
                            better access to their funds. However, during the enrollment flow, only 56% of customers who
                            started enrollment had completed the flow. Compare to competitors, this conversion rate was
                            pretty low.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <h3>RESEARCH</h3>
                        <p>To understand what is making users hard to complete their task, we interviewed different user
                            segments and asked what makes them hestiate or stop during the application process for other
                            financial institutions or products. To build hypothses, we wanted get clarification on these
                            subjects.</p>
                        <ul>
                            <li>Users' perception on Customer Identification Program (DoB and SSN)</li>
                            <li>How much of information and form fields to fill is digestible</li>
                            <li>Which information make users confidence and help decision making process</li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <h3>HYPOTHESES</h3>
                        <p>
                            By auditing user sessions and research, we learned that users get confused by several
                            points.
                            <ol>
                                <li>Interface does not indicate user where they are in application process.</li>
                                <li>Also, user does not get information about remaining steps.</li>
                                <li>User is not informed well enough about the bundle they are getting.</li>
                            </ol>
                        </p>
                        <p>After understanding user's problem and defining hypotheses, next step was clear.</p>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="row">
                    <div className="col-sm-12">
                        <h3 className="nextSection">SOLUTION</h3>
                        <h3>Intro</h3>
                        <p>On the first page of the flow, we added information around the process users will walk
                            through.</p>
                        <img src="assets/ppcc01.png"/>
                    </div>
                    <div className="col-sm-12">
                        <h3>Progress bar</h3>
                        <p>On the first page of the flow, we added information around the process users will walk
                            through.</p>
                        <img src="assets/ppcc02.png"/>
                    </div>
                    <div className="col-sm-12">
                        <h3>Progress bar</h3>
                        <p>On the first page of the flow, we added information around the process users will walk
                            through.</p>
                        <img src="assets/ppcc03.png"/>
                    </div>
                    <div className="col-sm-12">
                        <div className="divider"></div>
                        <h3>Result</h3>
                        <p>New enrollment experience is ramped for A/B testing. So far, conversion rate of the
                            experience with new design is 66%. We increased the conversion rate but still, we think
                            there are optimization opportunities.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 row">
                        <div className="vertical-space"></div>
                        <a className="previous col-sm-3" href="paypal3.html">PREVIOUS<br/><span className="label">PayPal Design Language</span></a>
                        <a className="next col-sm-3" href="uniqlo.html">NEXT<br/><span
                            className="label">UNIQLO</span></a>
                    </div>
                </div>
            </div>
    )
}


ReactDOM.render(
    <ProjectRow />,
    document.getElementById('root')
);