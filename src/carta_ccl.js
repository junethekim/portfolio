
function ProjectRow(){
    return (
        <div className="container">
            <div className="project row">
                <div className="col-sm-12 project-title">
                    <h2 className="company">Carta</h2>
                    <h2 className="main-title">Capital call line</h2>
                    <p className="label">2019</p>
                </div>
                <div className="col-sm-12 project-img">
                    <img src="assets/ccl/home01.png" />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <h3>Start with why</h3>
                    <p>
                        Small funds (
                        &lt;$100M
                        ) are not experts at cash management, but still need to be able to send companies funds quickly
                              in order to participate in fundraising rounds.
                        <ul>
                            <li>
                                Further, coordinating capital calls amongst 10s or 100+ Limited Partners in the fund can
                                be difficult to track and time with financing round closings.
                            </li>
                            <li>
                                The traditional solution to this problem is to get a revolving line of credit from a
                                bank that can be drawn down when needed.
                            </li>
                        </ul>
                        However, many of Carta’s fund customers aren’t large or prominent enough to get capital call
                        lines at the sizes and terms they need.
                        <br/>
                        Additionally, CartaX customers will be less likely to bid on the exchange without access to a
                        CCL - they would rather not bid than post collateral to back their bids.

                    </p>
                    <div className="vertical-space"></div>
                    <h3>What are the benefits to Customers?</h3>
                    <ul>
                        <h4 className="margin-btm">Fast, Enhanced Access</h4>
                        <li>Close deals quickly</li>
                        <li>Targeting underserved customers with competitive rates</li>
                    </ul>

                    <ul>
                        <h4 className="margin-btm">One-stop shop</h4>
                        <li>Simplified back office, managed by single, responsive partner</li>
                        <li>Radically reduce overhead for LPs</li>
                    </ul>

                    <ul>
                        <h4 className="margin-btm">Return-enhancing product</h4>
                        <li>Capital call lines will boost customers’ IRRs</li>
                    </ul>

                </div>
            </div>
            <div className="divider"></div>
            <div className="row">
                <div className="col-sm-12">
                    <h3 className="nextSection">User personas & Jobs-to-be-dones</h3>
                    <p>
                        <h3 className="label">User persona A</h3>
                        <h3>General Partners & Fund managers</h3>
                        <ul>
                            <h4 className="margin-btm"></h4>
                            <li>
                                The person manages the finances at the fund
                            </li>
                            <li>
                                The person is typically the CFO or fund managers or it could be the GPs in smaller funds
                            </li>
                            <li>
                                This would be the same person that manages the bank accounts for the fund
                            </li>
                        </ul>
                    </p>
                    <p>
                        <ul>
                            <h4 className="margin-btm">Key jobs-to-be-dones</h4>
                            <li>
                                Cash flow management
                            </li>
                            <li>
                                Applying for a capital call line of credit
                            </li>
                            <li>
                                Notify their fund admin that a drawdown is required to fund an investment
                            </li>
                            <li>
                                Make decisions on payback schedule
                            </li>
                            <li>
                                View interest accrued and paid
                            </li>
                        </ul>
                    </p>
                </div>
                <div className="col-sm-12">
                        <p>
                            <h3 className="label">User persona B</h3>
                            <h3>Fund administrators / Carta loan ops</h3>
                            <ul>
                                <h4 className="margin-btm"></h4>
                                <li>
                                    The person provides financial reports to General Partners and fund managers
                                </li>
                                <li>
                                    The person often needs to confirm or complete on behalf of General Partners and fund
                                    managers
                                </li>
                            </ul>
                        </p>
                        <p>
                            <ul>
                                <h4 className="margin-btm">Key jobs-to-be-dones</h4>
                                <li>
                                    look at the capital call line interface to make sure it accurately reflects what
                                    they know about the line
                                </li>
                                <li>
                                    Receive email and slack notifications from advance and payback requests
                                </li>
                                <li>
                                    Confirm and approve advance and payback requests
                                </li>
                            </ul>
                        </p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <h3 className="nextSection">Key screens</h3>
                    <img src="assets/ccl/lineofcredit.png"/>
                    <div className="vertical-space"></div>
                    <img src="assets/ccl/acct_summary.png"/>
                    <div className="vertical-space"></div>
                    <img src="assets/ccl/req_advance.png"/>
                    <div className="vertical-space"></div>
                    <img src="assets/ccl/init_payback.png"/>
                    <div className="vertical-space"></div>


                </div>
            </div>

            <div className="row">
                <div className="col-sm-12 row">
                    <div className="vertical-space"></div>
                    <a className="previous col-sm-3" href="carta_is">PREVIOUS<br/><span className="label">Carta Investor experience redesign</span></a>
                    <a className="next col-sm-3" href="carta_ccds">NEXT<br/><span className="label">Carta Fund admin distribution V2</span></a>

                </div>
            </div>
        </div>
    )
}


ReactDOM.render(
    <ProjectRow />,
    document.getElementById('root')
);