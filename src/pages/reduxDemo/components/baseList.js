import { connect } from "react-redux";
console.log(React.Component, "React.Component");
class BaseList extends React.Component {
  render() {
    const { baseListReducer, add, dece } = this.props || {};
    const { count } = baseListReducer;

    return (
      <div>
        <button onClick={add}>+</button>
        {count}
        <button onClick={dece}>-</button>
      </div>
    );
  }
}

const mapState = (state) => {
  return state;
};

const mapDispatch = (dispatch) => {
  return {
    add: () => {
      dispatch({ type: "MODULE_BASELIST_ADD" });
    },
    dece: () => {
      dispatch({ type: "MODULE_BASELIST_DECE" });
    },
  };
};

export default connect(mapState, mapDispatch)(BaseList);
