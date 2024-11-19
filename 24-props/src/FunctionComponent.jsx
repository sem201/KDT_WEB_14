import PropTypes from "prop-types";

// export default function FunctionComponent(props) {
//   return <div>{props.name}</div>;
// }

export default function FunctionComponent({ name = "홍길동" }) {
  return <div>{name}</div>;
}

// 밑에는 조금씩 없어지는 추세임으로 위의 방식을 사용하자
FunctionComponent.defaultProps = {
  // name: "철수",
};

FunctionComponent.propTypes = {
  name: PropTypes.string,
};
