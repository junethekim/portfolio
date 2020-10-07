class Main extends React.Component {
    render(){
        return (
            <div id="main" class="row">
                <div class="col-md-6">
                    <h1>June J. Kim</h1>
                    <p>UX Engineer</p>
                    <div class="vertical-space"></div>
                </div>
            </div>
        )
    }
}

function ProjectRow(props){
    return (
        <div className="project row">
            <a href={props.data.href}>
                <div className="col-sm-4 project-title">
                    <h2 className="main-title">{props.data.title}
                        <p className="label">{props.data.time}</p>
                    </h2>
                    <p className="label cta next">Explore</p>
                </div>
                <div className="col-sm-8 project-img">
                    <img src={props.data.imgSrc} />
                </div>
            </a>
        </div>
    )
}

const ppCashIO = {
    title: "PayPal Cash In & Out",
    time: "2017 – 2018",
    imgSrc: "assets/cashio_intro.png",
    href: "paypalcashio"
}

const ppDL = {
    title: "PayPal Design Language",
    time: "2016 – 2018",
    imgSrc: "assets/dl_intro.png"
}

const ppCC = {
    title: "PayPal Cash Card Enrollment",
    time: "2018",
    imgSrc: "assets/ppcc.png"
}

const truffle = {
    title: "Truffle",
    time: "2018",
    imgSrc: "assets/truffle.png"
}


class App extends React.Component{
    render(){
        return (
            <div>
                <Main />
                <ProjectRow data={ppCashIO} />
                <ProjectRow data={ppDL} />
                <ProjectRow data={ppCC} />
                <ProjectRow data={truffle} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);