import { connect } from "react-redux";
class CardList extends React.Component {
  render() {
    console.log(this.props, "this.props");
    return (
      <div>
        <button onClick={this.props.add}>+</button>
        <span>{this.props.cardListReducer.count}</span>
        <button onClick={this.props.dece}>-</button>
      </div>
    );
  }
}

const mapState = (state) => state;

const mapDispatch = (dispatch) => {
  return {
    add() {
      dispatch({ type: "ADD" });
    },
    dece() {
      dispatch({ type: "DECE" });
    },
  };
};
export default connect(mapState, mapDispatch)(CardList);
