import logo from "./logo.svg";
import "./App.css";

function App() {
  // const name = "luna";
  // const student = "KDT14";
  // const styles = { backgroundColor: "red" };

  // [실습 1번]
  const name = "로이";
  const animal = "강아지";
  const underline = { textDecoration: "underline" };
  let a = 10;
  let b = 2;
  // [실습 4번]
  const title = "Hello World";

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* JSX 문법 */}
      {/* 1. 하나로 감싸인 요소 */}
      {/* 2. JavaScript 표현식 사용 
          - {}로 감싸면 js 표현식 사용 가능
          - {}에서 삼항연산자, 단축 평가 등 사용 가능 (if, for 문 등은 안된다)
      */}
      {/* <div>{name} 안녕?</div>
      <div>{student === "KDT14" ? "kdt 14기 수강생이군요!" : "누구세요?"}</div> */}
      {/* 3. style 속성
          - 리액트에서 돔 요소에 스타일 적용 시 문자열x -> 객체 사용
          - 스타일 이름 중 하이픈(-) 포함 시 className로 작성 */}
      {/* <div style={{ backgroundColor: "#d9d9d9", fontSize: "24px" }}>하이</div>
      <div style={styles}>하이이</div> */}
      {/* 4. className 사용
          - class -> className
          
          5. 종료 태그가 없는 태그의 사용
          - 기존의 종료 태그가 없는 태그를 사용하더라고 종료 태그를 작성해야 함 or self-closing
          - 잘못된 예) <input><br>
          - 올바른 예) <input/><br/>
            
          6. 주석
          - // : jsx 외부 주석
          
            */}
      {/* [실습1번] */}
      {/* <h2>
        제 반려 동물의 이름은 <span style={underline}>{name}</span>입니다.
        <br />
        <span style={underline}>{name}</span>는{" "}
        <span style={underline}>{animal}</span>입니다.
      </h2> */}
      {/* [실습 2번] */}
      {/* {3 + 5 != 8 ? <div>정답입니다!</div> : <div>오답입니다!</div>} */}

      {/* [실습 3번] */}
      {a > b && "a가 b보다 큽니다"}

      {/* [실습 4번] */}
      <div className={"container"}>
        <div style={{ backgroundColor: "#FFD59E" }}>
          <h1 style={{ color: "orange" }}>{title}</h1>
        </div>
        <div className={"itemContainer"}>
          <span>아이디</span>
          <input type="text" />
        </div>
        <div className={"itemContainer"}>
          <span>비밀번호</span>
          <input type="password" />
        </div>
      </div>
    </div>
  );
}

export default App;
