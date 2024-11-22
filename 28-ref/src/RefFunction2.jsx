import React, { useRef, useState } from "react";

export default function RefFunction2() {
  const idRef = useRef(1);
  const [id, setId] = useState(10);
  let test = 10;

  const plusIdRef = () => {
    idRef.current += 1;
    console.log(idRef.current); // 실제로는 증가하고 있지만 ref 의 경우 랜더링을 하지 않기 때문에, state변경을 하지 않으면 변한 모습이 보이지 않음
    test += 1;
    console.log(test);
  };
  const plusIdState = () => {
    setId(id + 1);
  };
  return (
    <div>
      <h1>Ref</h1>
      <h2>{idRef.current}</h2>
      <button onClick={plusIdRef}>PLUS Ref</button>
      <h2>{id}</h2>
      <button onClick={plusIdState}>PLUS State</button>
      <h2>{test}</h2>
    </div>
  );
}
