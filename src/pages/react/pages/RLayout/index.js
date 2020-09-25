import { connect } from "react-redux";
import { handleRLayoutMenu } from "../../store/module/RLayout/actions";
import RLayoutUI from "./RLayoutUI";

function RLayout(props) {
  return <RLayoutUI {...props} />;
}

const mapState = (state) => {
  return state;
};

const mapDispatch = (dispatch) => {
  return {
    handleMenu: (pathName, history) => {
      handleRLayoutMenu(dispatch, pathName, history);
    },
  };
};

export default connect(mapState, mapDispatch)(RLayout);
