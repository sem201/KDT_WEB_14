import React, { Component } from "react";

export default class Prac1_class extends Component {
  state = {
    comment: [{ writer: "민수", title: "안녕" }],
  };
  inputWriter = React.createRef();
  inputTitle = React.createRef();

  addComment = () => {
    const writer = this.inputWriter.current.value;
    const title = this.inputTitle.current.value;

    if (writer.trim() == "") {
      this.inputWriter.current.focus();
      return;
    }
    if (title.trim() == "") {
      this.inputTitle.current.focus();
      return;
    }
    const newComment = {
      writer,
      title,
    };
    this.setState({
      comment: [...this.state.comment, newComment],
    });
    this.inputWriter.current.value = "";
    this.inputTitle.current.value = "";
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="writer">작성자</label>
          <input type="text" id="writer" ref={this.inputWriter} />
          <label htmlFor="title">제목</label>
          <input type="text" id="title" ref={this.inputTitle} />
          <button type="button" onClick={this.addComment}>
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
            {this.state.comment.map((value, idx) => {
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
}
