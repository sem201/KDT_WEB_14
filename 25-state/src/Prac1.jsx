import React, { Component } from "react";

export default class Prac1 extends Component {
  state = {
    number: 0,
  };
  render() {
    const { number } = this.state;
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ number: number + 2 });
          }}
        >
          +2
        </button>
        <button
          onClick={() => {
            this.setState({ number: number - 1 });
          }}
        >
          -1
        </button>
        <h2>현재 : {this.state.number}</h2>
      </div>
    );
  }
}
