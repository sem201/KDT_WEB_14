import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit } from "./store/leftMoneyReducer";

export default function Banking() {
  const leftMoney = useSelector((state) => state.leftMoney);
  const input = useRef();
  const dispatch = useDispatch();
  return (
    <>
      <h2>코딩온 은행</h2>
      <h3>잔액 : {leftMoney}원</h3>
      <input type="int" ref={input} />
      <button onClick={() => dispatch(deposit(Number(input.current.value)))}>
        입금
      </button>
      <button onClick={() => dispatch(deposit(Number(input.current.value)))}>
        출금
      </button>
    </>
  );
}
