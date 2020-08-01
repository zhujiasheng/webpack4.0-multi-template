import "./style";
import Icon from "./components/icon";
import Button from "./components/button";

function handleClick() {
  alert("handle-click");
}

function App() {
  return (
    <div className="multi-box">
      <Button onClick={handleClick}>按钮</Button>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
