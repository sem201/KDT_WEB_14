import React from "react";
import "./App.css";
import Student from "./components/Student";
import TodoList from "./components/TodoList";
import PostList from "./components/PostList";

function App() {
  const handleClick = (name: string, grade: number, score: number) => {
    console.log(`안녕 내 이름은 ${name}이고, ${grade}학년, 점수는 ${score}점`);
  };
  return (
    <div className="App">
      <Student
        name={"코딩온"}
        grade={3}
        part={"CS"}
        handleClick={handleClick}
      />
      <Student name={"코디"} grade={1} handleClick={handleClick} />
      <hr />
      <TodoList />
      <hr />
      <PostList />
    </div>
  );
}

export default App;
