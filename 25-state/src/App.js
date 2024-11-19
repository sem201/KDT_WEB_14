import "./App.css";
import Counter from "./Counter";
import SayFunction from "./SayFunction";
// import Prac1 from "./Prac1";
// import Prac2 from "./Prac2";
import PageLayout from "./PageLayout";
import Box from "./Box";

function App() {
  return (
    <div className="App">
      {/* <Counter />
      <hr />
      <SayFunction />
      <hr />
      <Prac1 />
      <hr />
      <Prac2 /> */}
      <PageLayout>
        <h2>홈 페이지 콘텐츠</h2>
        <p>여기는 홈 페이지</p>
        <Box>
          <h1>이건 children으로 들어간 콘텐츠!</h1>
          <p>react children은 컴포넌트 안에 들어가는 모든 콘텐츠</p>
        </Box>
      </PageLayout>
    </div>
  );
}

export default App;
