import Counter from "./Counter";
import "./App.css";
import ClassBind from "./ClassBind";
import SyntheticEvent from "./SyntheticEvent";
import HandlerEx from "./components/ex/HandlerEx";
import Prac2 from "./components/ex/Prac2";
import Prac3 from "./components/ex/Prac3";
import Prac4 from "./components/ex/Prac4";

function App() {
  return (
    <div className="App">
      {/* 합성이벤트 */}
      <SyntheticEvent />
      <hr />
      {/* 클래스형 컴포넌트 */}
      <ClassBind />
      {/* 함수형 컴포넌트 */}
      <Counter />
      {/* [실습1] */}
      <HandlerEx />
      {/* [실습2] */}
      <Prac2 />
      {/* [실습3] */}
      <Prac3 />
      {/* [실습4] */}
      <Prac4 />
    </div>
  );
}

export default App;
