import React, { useRef } from "react";

export default function RefFunction() {
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <p>(함수형 컴포넌트) 바튼 클릭 시 input에 focus 처리</p>
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>focus</button>
    </div>
  );
}
