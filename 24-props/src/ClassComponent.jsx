import { Component } from "react";
import PropTypes from "prop-types";

export default class ClassComponent extends Component {
  render() {
    const student = "철수";
    const { name } = this.props; //class 형의 경우 this.props 객체에 모두 들어 있음. => 구조분해해서 값을 받아올 수 있다.
    return (
      <div>
        <div>{name}</div>
        <div>{this.props.name}</div>
      </div>
    );
  }
  // static defaultProps = {
  //   name: "기본이름",
  // };

  static propTypes = {
    name: PropTypes.number,
  };
}

// class 형식의 경우 static을 이용하여 defaultProps를 줄 수도 있고 function 형식에서 처럼 .defaultProps로 선언해줄 수 있다.
// ClassComponent.defaultProps = {
//   name: "철수",
// };

// class 형식에서는 propTypes도 마찬가지로 두가지 방식으로 선언 가능하다.
ClassComponent.propTypes = {
  name: PropTypes.number.isRequired,
};
