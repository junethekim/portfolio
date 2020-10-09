class Main extends React.Component {
    render(){
        return (
            <div id="main" class="row">
                <div class="col-md-6">
                    <h1>June J. Kim</h1>
                </div>
            </div>
        )
    }
}

const projects = {
    cartaIS : {
        label: "Carta",
        title: "Investor Services Redesign",
        time: "2019",
        imgSrc: "assets/is_redesign/home01.png",
        href: "carta_is"
    }, cartaCCL : {
        label: "Carta",
        title: "Capital Call Line",
        time: "2019",
        imgSrc: "assets/ccl/home01.png",
        href: "carta_ccl"
    }, cartaCCDS : {
        title: "Fund admin distribution V2",
        time: "2019",
        imgSrc: "assets/ccds/home01.png",
        href: "carta_ccds"
    },
    ppCashIO : {
        label: "PayPal",
        title: "Cash In & Out",
        time: "2017 – 2018",
        imgSrc: "assets/cashio_intro.png",
        href: "paypal_cashio"
    }, ppDL : {
        label: "PayPal",
        title: "Design Language",
        time: "2016 – 2018",
        imgSrc: "assets/dl_intro.png",
        href: "paypal_dl"
    }, ppCC : {
        label: "PayPal",
        title: "Cash Card Enrollment",
        time: "2018",
        imgSrc: "assets/ppcc.png",
        href: "paypal_cc"
    }, truffle : {
        title: "Truffle",
        time: "2018",
        imgSrc: "assets/truffle.png",
        href: "truffle"
    }
}

function ProjectRow(props){
    return (
        <div className="project row">
            <a href={props.data.href}>
                <div className="col-sm-4 project-title">
                    <p className="label">{props.data.label}</p>
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

class App extends React.Component{
    render(){
        return (
            <div>
                <Main />
                <ProjectRow data={projects.cartaIS} />
                <ProjectRow data={projects.cartaCCL} />
                <ProjectRow data={projects.cartaCCDS} />
                <ProjectRow data={projects.ppCashIO} />
                <ProjectRow data={projects.ppDL} />
                <ProjectRow data={projects.ppCC} />
                <ProjectRow data={projects.truffle} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);