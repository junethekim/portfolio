
class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    exitClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    render(){
        return (
            <div>
                <div class={this.state.isToggleOn ? 'slate active' : 'slate'} id="slate" onClick={this.handleClick}/>
                <div class="hbgmenu" id="hbg" onClick={this.handleClick}>
                    <div class="hbgbar bar1" />
                    <div class="hbgbar bar2" />
                    <div class="hbgbar bar3" />
                </div>
                <div class={this.state.isToggleOn ? 'menu active' : 'menu'} id="sidemenu">
                    <div class="content">
                        <a class="logo" href="/"><img src="assets/logo.png" /></a>
                        <div class="contact">
                            <a href="/">Projects</a>
                            <br />
                            <a href="mailto:junethekim@gmail.com">Email</a>
                            <br />
                            <a href="assets/june-kim_resume.pdf" target="_blank">Résumé</a>
                            <br />
                            <a href="https://dribbble.com/junethekim" target="_blank">Dribbble</a>
                            <br />
                            <a href="https://www.linkedin.com/in/junejk" target="_blank">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <Nav />,
    document.getElementById('nav')
);