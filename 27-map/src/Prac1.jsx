import React, { useState } from "react";

export default function Prac1() {
  const [user, setUser] = useState([
    {
      name: "코디",
      email: "codi@gmail.com",
    },
    {
      name: "윤소희",
      email: "yoonsohee@gmail.com",
    },
  ]);
  const [inputInfo, setInputInfo] = useState({
    name: "",
    email: "",
  });

  function register() {
    const newUser = user.concat({
      name: inputInfo.name,
      email: inputInfo.email,
    });
    setUser(newUser);
    setInputInfo({ name: "", email: "" });
    console.log("등록된 값", user);
  }
  const activeEnter = (e) => {
    if (e.key === "Enter") {
      register();
    }
  };
  const deleteUser = (targetId) => {
    const newUser = user.filter((value) => value.name !== targetId);
    setUser(newUser);
  };
  return (
    <>
      <input
        type="text"
        placeholder="이름"
        value={inputInfo.name}
        onChange={(e) => {
          setInputInfo({ name: e.target.value, email: inputInfo.email });
        }}
        onKeyDown={activeEnter}
      />
      <input
        type="text"
        placeholder="이메일"
        value={inputInfo.email}
        onChange={(e) => {
          setInputInfo({ name: inputInfo.name, email: e.target.value });
        }}
        onKeyDown={activeEnter}
      />
      <button onClick={register} onKeyDown={(e) => activeEnter(e)}>
        등록
      </button>
      {user.map((value, index) => (
        <li key={value.name} onDoubleClick={() => deleteUser(value.name)}>
          {value.name}:{value.email}
        </li>
      ))}
    </>
  );
}
