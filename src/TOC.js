import React from "react";

class TOC extends React.Component {
  render() {
    let list = [];
    let data = this.props.data;
    let i = 0;
    while (i < data.length) {
      list.push(
        <li key={data[i].id}>
          <a href={data[i].id}>{data[i].title}</a>
        </li>
      );
      i += 1;
    }
    return <ul>{list}</ul>;
  }
}

export default TOC;
