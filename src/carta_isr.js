
function ProjectRow(){
    return (
        <div className="container">
            <div className="project row">
                <div className="col-sm-12 project-title">
                    <h2 className="company">Carta</h2>
                    <h2 className="main-title">Investor experience redesign</h2>
                    <p className="label">2019</p>
                </div>
                <div className="col-sm-12 project-img">
                    <img src="assets/is_redesign/home01.png" />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <h3>Start with why</h3>
                    <p>
                        Carta’s Investor platform does not help GPs manage their fund.
                        GPs can’t find (or don’t have) the data they need to manage their fund. Our IA doesn’t match the
                        mental model of GPs. We have most the data and information they want.
                    </p>
                    <h3>Current problem</h3>
                    <p>
                        Since the old navigation did not meant to support investor experience, users were having
                        difficulties to achieve their goal, complete their tasks or find the data they need. Therefore,
                        we decided to re-structure the navigation to improve general usability of investor experience.
                    </p>
                </div>
                <img src="assets/is_redesign/compare_01.png"/>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <h3>General Partner – Jobs to be done</h3>
                    <p>
                        Based on general partner’s jobs to be done, we decided to design new information architecture to
                        help customers to achiever their tasks and goals.
                    </p>
                    <img src="assets/is_redesign/jtbd.jpg"/>
                    <h3>Captured key jobs-to-be-dones</h3>
                    <ul>
                        <li>Manage cash and portfolio (investments).</li>
                        <li>Track the performance of investments.</li>
                        <li>Report investment performance to Limited Partners.</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <h3>New information architecture</h3>
                    <p>
                        New information architecture is based on investors’ mental model and the structure of investment
                        firms. We wanted to make the our platform feels like extension of their cabinet and office.
                    </p>
                    <img src="assets/is_redesign/ia_01.jpg"/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <h3>User testing</h3>
                    <p>Since the impact of navigation change will be huge, we wanted to be conservative and confident
                        about our decisions. Therefore, we decided to test prototype of our new information architecture
                        with 5 different investors to see what they think. And we got positive feedbacks in general and
                        here are quotes from testing sessions.</p>

                    <h4 className="quote">
                        “I think you guys are moving into the right direction of increase data density.”
                    </h4>
                    <h4 className="quote">
                        “Trending in the right direction. In terms of user friendliness really only a few things missing. Feels easy to navigate.”
                    </h4>
                    <p>
                        After user testings, we felt confident to proceed to beta phase. So we had to convince internal stakeholders to build the beta version of our new navigation and investor experience. Here is a prototype of new navigation we used for the user testing and selling our idea to internal stakeholders.
                    </p>
                </div>

                <div className="divider" />
                <div className="row">
                    <div className="col-sm-12">
                        <h3 className="nextSection">Key screens</h3>
                        <img src="assets/is_redesign/design_01.png" />
                        <div className="vertical-space" />
                        <img src="assets/is_redesign/design_02.png" />
                        <div className="vertical-space" />
                        <img src="assets/is_redesign/design_03.png" />
                        <div className="vertical-space" />
                        <img src="assets/is_redesign/design_04.png" />
                    </div>
                </div>

                <div className="col-sm-12">
                    <div className="vertical-space" />
                    <p>
                        After road show with internal stakeholders, we did beta launch with 35 investment firms on September 6, 2019. And here are feedbacks we received from customers so far.
                    </p>
                    <h4 className="quote">
                        “One I think, left side nav, Thank you. It’s just so much more intuitive to have left side navigation here and to not have complexity of menu’s changing across the top.”
                    </h4>
                    <h4 className="quote">
                        “If asked by another firm, I would absolutely recommend. There was some challenges a long the way but those were resolved incredibly quickly.”
                    </h4>
                    <h4 className="quote">
                        “Overall I think it looks good. Taking away the two selections at the top is helpful, that was confusing to navigate."
                    </h4>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12 row">
                    <div className="vertical-space" />
                    <a className="previous col-sm-3" href="truffle.html">
                        PREVIOUS<br/>
                        <span className="label">Truffle</span>
                    </a>
                    <a className="next col-sm-3" href="carta_ccl.html">
                        NEXT<br/>
                        <span className="label">Carta Capital Call Line</span>
                    </a>
                </div>
            </div>
        </div>
    )
}


ReactDOM.render(
    <ProjectRow />,
    document.getElementById('root')
);