import React from "react";
import TOC from "./TOC";
import Content from "./Content";
import Subject from "./Subject";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      welcome: { title: "React", desc: "Hello, React!" },
      subject: {
        title: "WEB",
        sub: "world wide web!",
      },
      contents: [
        {
          id: 1,
          title: "HTML",
          desc: "HTML is hypertext Markup Language.",
        },
        {
          id: 2,
          title: "CSS",
          desc: "CSS is for design.",
        },
        {
          id: 3,
          title: "JavaScript",
          desc: "JavaScript is for interactive.",
        },
      ],
    };
  }

  render() {
    let _title,
      _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        />
        <TOC
          data={this.state.contents}
          onChangePage={function () {
            this.setState({ mode: "read" });
          }.bind(this)}
        />
        <Content title={_title} desc={_desc} />
      </div>
    );
  }
}

export default App;
