//
// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {date: new Date()};
//     }
//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//         );
//     }
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }
//     tick() {
//         this.setState({
//             date: new Date()
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
// );
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      class: this.state.isToggleOn ? 'slate active' : 'slate',
      id: "slate"
    }), /*#__PURE__*/React.createElement("div", {
      class: "hbgmenu",
      id: "hbg",
      onClick: this.handleClick
    }, /*#__PURE__*/React.createElement("div", {
      class: "hbgbar bar1"
    }), /*#__PURE__*/React.createElement("div", {
      class: "hbgbar bar2"
    }), /*#__PURE__*/React.createElement("div", {
      class: "hbgbar bar3"
    })), /*#__PURE__*/React.createElement("div", {
      class: this.state.isToggleOn ? 'menu active' : 'menu',
      id: "sidemenu"
    }, /*#__PURE__*/React.createElement("div", {
      class: "content"
    }, /*#__PURE__*/React.createElement("a", {
      class: "logo",
      href: "/"
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/logo.png"
    })), /*#__PURE__*/React.createElement("div", {
      class: "contact"
    }, /*#__PURE__*/React.createElement("a", {
      href: "/"
    }, "Projects"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
      href: "mailto:imjunejk@gmail.com"
    }, "Email"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
      href: "assets/june-kim_resume.pdf",
      target: "_blank"
    }, "R\xE9sum\xE9"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
      href: "https://dribbble.com/junethekim",
      target: "_blank"
    }, "Dribbble"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
      href: "https://www.linkedin.com/in/junejk",
      target: "_blank"
    }, "LinkedIn")))));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(Nav, null), document.getElementById('nav'));