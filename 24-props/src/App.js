import logo from "./logo.svg";
import "./App.css";
import FunctionComponent from "./FunctionComponent";
import ClassComponent from "./ClassComponent";
import Button from "./Button";
import Food from "./Food";
import BestSeller from "./BestSeller";
import Class from "./Class";

// function App() {
//   return (
//     <div className="App">
//       <FunctionComponent name="새싹" />
//     </div>
//   );
// }

// props로 넘겨주지 않으면 default 값으로 쓰여진다.
function App() {
  function valid() {
    console.log("콘솔 띄우기 성공");
  }
  return (
    <div className="App">
      {/* // <div className="App">
      <FunctionComponent />

      <hr />
      <ClassComponent />
      <hr />
      <Button link="http://www.google.com">Google</Button>

      <hr />
      <Food food="비빔밥"></Food>
    </div>
    <BestSeller
      title="나의 하루는 4시 40분에 시작된다"
      author="김유진"
      price="13,500"
      type="자기개발서"
    // */}
      <Class text="props" valid={valid} />
      <hr />
    </div>
  );
}

export default App;
