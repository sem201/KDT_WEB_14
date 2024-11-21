import React from "react";

export default function SyntheticEvent() {
  function SyntheticEvent(e) {
    console.log(e);
    // 콘솔에 기록되는 e 객체는 SyntheticEvent(합성 이벤트)
    // : 리액트가 DOM이 아닌 Virtual DOM을 사용하는 것처럼
    // 웹 브라우저의 nativeEvent가 아닌 nativeEvent를 감싼 SyntheticEvent사용
  }
  function printInput(e) {
    console.log(e.target.value);
  }
  return (
    <div>
      <button onClick={SyntheticEvent}>SyntheticEvent 콘솔에 찍기</button>
      <br />
      <input type="text" onChange={printInput} />
    </div>
  );
}
