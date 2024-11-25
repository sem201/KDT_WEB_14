import React, { useReducer } from "react";

// 지금 예제로는 편의상 같은 파일에서 실행했지만, 여러 파일에다가 모두 분리 가능
const initState = { value: 0 }; // 객체 형태로 초기화 (state처럼 어떤 형태이든 다 가능)

const reducer = (prevState, action) => {
  // prevState: 현재 상태, action : dispatch에서 발생시킬 액션
  console.log("현재상태:", prevState, "액션", action);

  switch (action.type) {
    case "INCREMENT":
      return { value: prevState.value + 1 };
    case "DECREMENT":
      return { value: prevState.value - 1 };
    case "RESET":
      return initState;
  }
};

export default function UseReducerEx() {
  // reducer : state를 업데이트 하는 함수
  // dispatch : 액션(state가 어떻게 변경되어야 하는지에 대한 힌트)을 발생시키는 함수
  // state : 현재 상태
  // useReducer는 [state, dispatch] 를 리턴함
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <h1>UseReducerEx</h1>
      <h2>{state.value}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>Plus</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Minus</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}
