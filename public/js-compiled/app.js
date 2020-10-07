class Main extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      id: "main",
      class: "row"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col-md-6"
    }, /*#__PURE__*/React.createElement("h1", null, "June J. Kim"), /*#__PURE__*/React.createElement("p", null, "UX Engineer"), /*#__PURE__*/React.createElement("div", {
      class: "vertical-space"
    })));
  }

}

function ProjectRow(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "project row"
  }, /*#__PURE__*/React.createElement("a", {
    href: "paypal2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-sm-4 project-title"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "main-title"
  }, props.data.title, /*#__PURE__*/React.createElement("p", {
    className: "label"
  }, props.data.time)), /*#__PURE__*/React.createElement("p", {
    className: "label cta next"
  }, "Explore")), /*#__PURE__*/React.createElement("div", {
    className: "col-sm-8 project-img"
  }, /*#__PURE__*/React.createElement("img", {
    src: props.data.imgSrc
  }))));
}

const ppCashIO = {
  title: "PayPal Cash In & Out",
  time: "2017 – 2018",
  imgSrc: "assets/cashio_intro.png"
};
const ppDL = {
  title: "PayPal Design Language",
  time: "2016 – 2018",
  imgSrc: "assets/dl_intro.png"
};
const ppCC = {
  title: "PayPal Cash Card Enrollment",
  time: "2018",
  imgSrc: "assets/ppcc.png"
};
const truffle = {
  title: "Truffle",
  time: "2018",
  imgSrc: "assets/truffle.png"
};

class App extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Main, null), /*#__PURE__*/React.createElement(ProjectRow, {
      data: ppCashIO
    }), /*#__PURE__*/React.createElement(ProjectRow, {
      data: ppDL
    }), /*#__PURE__*/React.createElement(ProjectRow, {
      data: ppCC
    }), /*#__PURE__*/React.createElement(ProjectRow, {
      data: truffle
    }));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));