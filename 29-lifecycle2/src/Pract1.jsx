import { useEffect, useState } from "react";
import axios from "axios";

export default function Prac1() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      const fetchData = axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((data) => setData(data.data));
    }, 2000);
  }, []);
  return (
    <>
      <header
        style={{
          backgroundColor: "#6F78FF",
          textAlign: "center",
          height: "50px",
        }}
      >
        <h2 style={{ color: "white", lineHeight: "50px" }}>📥Post List📥</h2>
      </header>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {data.length > 0 ? (
          data.map((value, idx) => (
            <div
              style={{ background: "#DCDFFF", width: "600px", margin: "30px" }}
            >
              <li
                key={value.id}
                style={{
                  padding: "10px",
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <p style={{ color: "gray" }}>
                  <span style={{ color: "lightblue" }}>No. {value.id}</span>-{" "}
                  {value.title}
                </p>
                <h3>{value.body}</h3>
              </li>
            </div>
          ))
        ) : (
          <h3>loading...</h3>
        )}
      </div>
    </>
  );
}
