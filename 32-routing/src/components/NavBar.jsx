import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Link to="/">
        <h2>React Router 실습</h2>
      </Link>
      <nav>
        <ul>
          <li style={{ margin: "4px" }}>
            <Link to="/student/kdt">학생 KDT</Link>
          </li>
          <li style={{ margin: "4px" }}>
            <Link to="/student/codingon">코딩온</Link>
          </li>
          <li style={{ margin: "4px" }}>
            <Link to="/student/new?name=kdt3rd">SearchParams</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
