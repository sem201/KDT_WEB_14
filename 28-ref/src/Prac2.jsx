import React, { useState, useRef } from "react";

export default function Prac3() {
  const writer = useRef(null);
  const title = useRef(null);
  const [comment, setComment] = useState([
    {
      writer: "민수",
      title: "안녕",
    },
  ]);
  const addComment = () => {
    console.log(writer.current);
    if (writer.current.value.trim() === "") {
      writer.current.focus();
      return;
    }
    if (title.current.value.trim() === "") {
      title.current.focus();
      return;
    }
    const newComment = {
      writer: writer.current.value,
      title: title.current.value,
    };
    setComment([...comment, newComment]);
  };

  return (
    <div>
      <form>
        <label htmlFor="writer">작성자</label>
        <input type="text" id="writer" ref={writer} />
        <label htmlFor="title">제목</label>
        <input type="text" id="title" ref={title} />
        <button type="button" onClick={addComment}>
          제출
        </button>
      </form>

      <table
        border={1}
        cellSpacing={0}
        style={{ marginTop: "30px", width: "500px" }}
      >
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((value, idx) => {
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
