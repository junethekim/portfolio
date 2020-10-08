
function ProjectRow(){
    return (
        <div className="container">
            <div className="project row">
                <div className="col-sm-12 project-title">
                    <h2 className="company">Carta</h2>
                    <h2 className="main-title">Fund admin distribution V2</h2>
                    <p className="label">2019</p>
                </div>
                <div className="col-sm-12 project-img">
                    <img src="assets/ccds/home01.png"/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <h3>Introduction</h3>
                    <p>
                        Distribution is an internal tool for fund administrators to manage and complete fund
                        distributions and email customizations.
                    </p>
                </div>

                <div className="col-sm-12">
                    <h3>Start with why</h3>
                    <p>
                        During the first 6 weeks after we shipped v1 of Distributions, 76% of distributions performed by
                        Fund Admin were done manually -- i.e. NOT done in-app. During that period, <strong>~65% of all
                        distributions were in-kind distributions</strong>, which are not supported by the app.
                        <br/>
                        Creating leverage for the Fund Admin team is a top priority for the IS R&D team. When our
                        product isn’t flexible enough to accommodate scenarios like in-kind distributions, it fails to
                        create leverage. So we can create leverage by building in more flexibility.
                    </p>
                    <p>
                        <ul>
                            <h4>Therefore, our goal of the project was</h4>
                            <li>
                                To create meaningful leverage for our fund accounting and operations team.
                            </li>
                            <li>
                                80% of capital call and distribution notices are generated in-app by the end of
                                December.
                            </li>
                        </ul>
                    </p>
                </div>
                <div className="col-sm-12">
                    <h3>Capturing feedback from the internal customers</h3>
                    <p>
                        Since, the tool is for the internal customers, we wanted to maximize the strength. We set up a
                        rapid feedback loop with fund administrators by creating a Slack channel and post any issue that
                        they are facing while their capital call or distribution tasks.
                    </p>
                </div>
                <div className="col-sm-5 col-xs-12">
                    <img src="assets/ccds/slack_channel.png"/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <h3>Capturing feedback from the internal customers</h3>
                    <p>
                        After collecting 5 in-kind distribution notices those weren't able to create in-app, we analyzed what was the information architeture that fund administrators were following. So we iterated user testings with fund admins with prototypes and we could solve the problem and deliver impact to the business. Our impact was 86% of capital calls & distributions were done in-app over the most recent 6 weeks and we achieved our goal which was 80% of capital calls & distributions in-app
                    </p>
                </div>
            </div>

            <div className="divider"></div>
            <div className="row">
                <div className="col-sm-12">
                    <h3 className="nextSection">Key screens</h3>
                    <img src="assets/ccds/screen01.png"/>
                    <div className="vertical-space"></div>
                    <img src="assets/ccds/screen02.png"/>
                    <div className="vertical-space"></div>
                    <img src="assets/ccds/screen03.png"/>
                    <div className="vertical-space"></div>
                    <img src="assets/ccds/screen04.png"/>
                </div>

                <div className="col-sm-12">
                    <div className="vertical-space"></div>
                    <div className="quote">
                        <h4>
                            Hey just wanted to let you know that all these "small" releases you have been putting out
                            are huge impacts. Even if people dont use it everyday, when it does pop up there isnt a fire
                            drill so its much appreciated.
                        </h4>
                        <p>– From an internal fund administrator</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12 row">
                    <div className="vertical-space"></div>
                    <a className="previous col-sm-3" href="carta_ccl.html">PREVIOUS<br/><span className="label">Carta capital call line</span></a>
                    <a className="next col-sm-3" href="paypal2.html">NEXT<br/><span className="label">PayPal Cash In & Out</span></a>
                </div>
            </div>


        </div>

    )
}


ReactDOM.render(
    <ProjectRow />,
    document.getElementById('root')
);