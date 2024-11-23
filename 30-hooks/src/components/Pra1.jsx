import React, { useState, useMemo } from "react";

export default function Pra1() {
  const [text, setText] = useState("");
  const [string, setString] = useState("");
  let count = 0;
  const changeTextCount = useMemo(() => {
    const splitString = string.split(" ");
    for (let i = 0; i < splitString.length; i++) {
      if (splitString[i] === text) {
        count += 1;
      }
      return count;
    }
  }, [text, string]);
  return (
    <div>
      <p>입력한 문자열</p>
      <input
        type="text"
        onChange={(e) => setString(e.target.value)}
        value={string}
      />
      <p>찾고자 하는 단어</p>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      {text && (
        <p>
          "{text}" 단어의 빈도수 {changeTextCount}
        </p>
      )}
    </div>
  );
}
