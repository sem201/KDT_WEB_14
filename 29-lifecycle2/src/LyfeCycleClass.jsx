import React, { Component } from "react";
import LifecylcleClassChild from "./LifecylcleClassChild";

export default class LifecycleClass extends Component {
  state = {
    number: 0,
    visible: true,
  };
  changeNumber = () => this.setState({ number: this.state.number + 1 });
  changeVisible = () => this.setState({ visible: !this.state.visible });
  render() {
    return (
      <>
        <div>LifecycleClass</div>
        <button onClick={this.changeNumber}>Plus</button>
        <button onClick={this.changeVisible}>ON/OF</button>
        {this.state.visible && (
          <LifecylcleClassChild number={this.state.number} />
        )}
      </>
    );
  }
}
