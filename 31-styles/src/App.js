import CssModuleComponent from "./CssModuleComponent";
import SassComponent from "./SassComponent";
import StyledComponent from "./StyledComponent";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <h1>React Styling</h1>

      <h2>CSS Module</h2>
      <CssModuleComponent />

      <h2>Sass</h2>
      <SassComponent />

      <h2>styled component</h2>
      <StyledComponent />
    </div>
  );
}

export default App;
