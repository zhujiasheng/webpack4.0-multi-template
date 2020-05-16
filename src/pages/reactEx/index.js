import "./index.less";

console.log("hello");

function test() {
  console.log(11);
}

let a = 10;
if (a > 10) {
  console.log("hgh");
}
test();

function App() {
  return <div className="multi-box">react-app</div>;
}

ReactDOM.render(<App />, document.querySelector("#root"));
