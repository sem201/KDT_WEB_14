import { useState } from "react";
const Prac2 = () => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <button
        onClick={() => {
          setNumber(number + 2);
        }}
      >
        +2
      </button>
      <button
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        -1
      </button>
      <h1>현재:{number}</h1>
    </div>
  );
};

export default Prac2;
