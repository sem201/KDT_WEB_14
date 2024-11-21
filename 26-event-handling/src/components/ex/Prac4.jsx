import React, { useState } from "react";
import apple from "../../assets/apple.jpg";
import banana from "../../assets/banana.jpg";
import orange from "../../assets/orange.jpg";
import peach from "../../assets/peach.jpg";
export default function Prac4() {
  const [textStyle, setTextStyle] = useState({
    img: apple,
    color: "yellow",
    backgroundColor: "red",
    msg: "",
  });
  const fruits = {
    apple,
    banana,
    orange,
    peach,
  };
  function changeInfo(e) {
    console.log(e.target);
    const { name, value } = e.target;
    if (name === "fruits") {
      setTextStyle({
        img: fruits[value],
        color: textStyle.color,
        backgroundColor: textStyle.backgroundColor,
        msg: textStyle.msg,
      });
    } else if (name === "backgroundColor") {
      setTextStyle({
        img: textStyle.img,
        color: textStyle.color,
        backgroundColor: value,
        msg: textStyle.msg,
      });
    } else if (name === "color") {
      setTextStyle({
        img: textStyle.img,
        color: value,
        backgroundColor: textStyle.backgroundColor,
        msg: textStyle.msg,
      });
    } else if (name === "text") {
      setTextStyle({
        img: textStyle.img,
        color: textStyle.color,
        backgroundColor: textStyle.backgroundColor,
        msg: value,
      });
    }
    console.log(textStyle.img);
  }
  return (
    <form name="form">
      <span>과일 : </span>
      <select name="fruits" onChange={changeInfo}>
        <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="peach">복숭아</option>
        <option value="orange">오렌지</option>
      </select>
      <sapn>배경색 :</sapn>
      <select name="backgroundColor" onChange={changeInfo}>
        <option value="red">빨강</option>
        <option value="green">초록</option>
      </select>
      <span>글자색 : </span>
      <select name="color" onChange={changeInfo}>
        <option value="yellow">노랑</option>
        <option value="black">검정</option>
      </select>
      <span>내용 : </span>
      <input type="text" name="text" onChange={changeInfo} />
      <img src={textStyle.img} />
      <div
        style={{
          color: textStyle.color,
          backgroundColor: textStyle.backgroundColor,
        }}
      >
        {textStyle.msg}
      </div>
    </form>
  );
}
