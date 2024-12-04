import React, { useState } from "react";

interface Props {
  name: string;
  grade: number;
  part?: string; // optionsal 한 props
  handleClick: (name: string, grade: number, score: number) => void;
}

export default function Student({ name, grade, part, handleClick }: Props) {
  const [score, setScore] = useState<number>(0);
  return (
    <div>
      <ul onClick={() => handleClick(name, grade, score)}>
        <li>이름 : {name}</li>
        <li>학년 : {grade}</li>
        <li>전공 : {part || "자유 전공"}</li>
        <li>
          점수 :{" "}
          <input
            type="number"
            onChange={(e) => setScore(Number(e.target.value))}
          />
        </li>
      </ul>
    </div>
  );
}
