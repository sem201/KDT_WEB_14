import React, { useState } from "react";

export default function SayFunction() {
  console.log(useState("welcome!")); // ['welcome!', f]
  const [message, setMessage] = useState("welcome!");
  // 'welcome!' : 상태 초기값, (숫자, 문자, 배열 값의 형태 자유로움)
  // message:메세지 상태
  // setMessage(): message state값을 바꾸는 함수

  const onclickEnter = () => {
    setMessage("안녕하세요");
  };
  const onclickleave = () => {
    setMessage("안녕히가세요~");
  };
  return (
    <div>
      <button onClick={onclickEnter}>입장</button>
      <button onClick={onclickleave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
}
