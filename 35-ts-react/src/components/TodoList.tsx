import React, { useState, useRef } from "react";
import { TodoItemType } from "../commonTypes";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos, setTodos] = useState<TodoItemType[]>([]); // 전체 투두 목록
  const [newTodo, setNewTodo] = useState<string>(""); // 새로 추가될 투두 하나
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    const updatedTodos = [
      ...todos,
      { id: Date.now(), text: newTodo, completed: false },
    ];
    setTodos(updatedTodos);
    setNewTodo("");
  };
  // 엔터 입력시 투두 추가(키보드 이벤트)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodo();
      inputRef.current?.focus();
    }
  };

  //focus 효과 (useRef 사용)
  const focusInput = () => {
    inputRef.current?.focus(); // inputRef의 초기값이 null 이므로 ?안쓰면 오류발생!
  };

  // 투두 아이템 완료 상태 변경 함수
  const toggleComplete = (targetId: number) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === targetId
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>TodoList</h1>
      <div>
        완료 개수 :{todos.filter((todo) => todo.completed === true).length}
      </div>
      <div>
        <input
          type="text"
          placeholder="todo"
          ref={inputRef}
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addTodo}>Add</button>
        <button onClick={focusInput}>Focus</button>
      </div>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
            />
          );
        })}
      </ul>
    </div>
  );
}
