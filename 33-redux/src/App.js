import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./App.css";
import { MINUS, PLUS } from "./store/counterReducer";

function App() {
  // store에 있는 상태 가져오기
  const number = useSelector((state) => {
    // useSelector : store에 있는 상태를 조회하는 함수
    console.log(state);
    // state.number;
    return state.counter.number;
  });

  // state를 쓰면 props driling 발생 (props로 하루종일 넘겨야함)
  // const [stateNumber, setStateNumber] = useState(50);

  // const plus = () => setStateNumber(stateNumber + 1);
  // const minus = () => setStateNumber(stateNumber - 1);

  return (
    <div className="App">
      <h1>React Redux Ex</h1>
      <h2>number : {number}</h2>
      <Box4 />
    </div>
  );
}

const Box1 = () => {
  return (
    <div className="Box">
      <h2>Box1</h2>
    </div>
  );
};
const Box2 = () => {
  return (
    <div className="Box">
      <Box1 />
      <h2>Box2</h2>
    </div>
  );
};
const Box3 = () => {
  return (
    <div className="Box">
      <Box2 />
      <h2>Box3</h2>
    </div>
  );
};
const Box4 = () => {
  const dispatch = useDispatch();
  return (
    <div className="Box">
      <Box3 />
      <h2>Box4</h2>
      <button onClick={() => dispatch({ type: PLUS })}>PLUS</button>
      <button onClick={() => dispatch({ type: MINUS })}>MINUS</button>
    </div>
  );
};

export default App;
