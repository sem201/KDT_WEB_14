import React, { Component } from "react";

export default class HandlerEx extends Component {
  state = {
    msg: "Hello Wrold!",
  };
  changeMsg = () => {
    this.setState({ msg: "Goodbye World!" });
  };
  render() {
    const { msg } = this.state;
    return (
      <div>
        <h1>{msg}</h1>
        <button onClick={this.changeMsg}>출력</button>
      </div>
    );
  }
}
