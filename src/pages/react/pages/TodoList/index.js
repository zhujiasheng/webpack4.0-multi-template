import * as action from "../../store/module/TodoList/action";
import { connect } from "react-redux";
import FirstUI from "./FirstUI";
import SecondUI from "./SecondUI";

function Hook(props) {
  return (
    <>
      <FirstUI {...props} />
      <hr />
      <SecondUI {...props} />
    </>
  );
}

const mapState = (state) => state;
const mapDispatch = (dispatch) => {
  return {
    handleAdd: (value) => action.handleAdd(dispatch, value),
    handleDece: (value) => action.handleDece(dispatch, value),
    handleQueryList: (value) => action.handleQueryList(dispatch, value),
    handleClear: () => action.handleClear(dispatch),
    handleAddList: (value) => action.handleAddList(dispatch, value),
  };
};

export default connect(mapState, mapDispatch)(Hook);
