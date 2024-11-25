import React, { useState } from "react";
import LifecycleFunctionChild from "./LifecycleFunctionChild";

export default function LifecylcleFunction() {
  const [visible, setVisible] = useState(true);
  const [number, setNumber] = useState(0);

  const changeNumber = () => {
    setNumber(number + 1);
  };
  const changeVisible = () => {
    setVisible(!visible);
  };
  return (
    <>
      <div>LifecycleClass</div>
      <button onClick={changeNumber}>Plus</button>
      <button onClick={changeVisible}>ON/OF</button>
      {visible && <LifecycleFunctionChild number={number} />}
    </>
  );
}
