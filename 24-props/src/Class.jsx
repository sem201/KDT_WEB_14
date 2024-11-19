import { Component } from "react";
import PropTypes from "prop-types";

export default class Class extends Component {
  render() {
    const { text, valid } = this.props;

    return (
      <>
        <div>{text}</div>
        <button onClick={valid}>콘솔 띄우기</button>
      </>
    );
  }

  static defaultProps = {
    text: "이건 기본 text props입니다.",
  };
  static protoTypes = {
    text: PropTypes.string.isRequired,
  };
}
