import "./App.css";
import UseMemoEx from "./components/UseMemoEx";
import UseCallbackEx1 from "./components/UseCallbackEx1";
import UseCallbackEx2 from "./components/UseCallbackEx2";
import Pra1 from "./components/Pra1";
import Info from "./components/Info";
import Prac2 from "./components/Prac2";

function App() {
  return (
    <div className="App">
      {/* <UseMemoEx /> */}
      {/* <UseCallbackEx1 /> */}
      <UseCallbackEx2 postId={9} />
      {/* <Pra1 /> */}
      {/* <Prac2 /> */}
    </div>
  );
}

export default App;
