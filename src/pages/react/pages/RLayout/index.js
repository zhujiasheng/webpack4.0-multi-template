import { connect } from "react-redux";
import { renderRoutes } from "react-router-config";
import RLayoutUI from "./RLayoutUI";
import { useHistory } from "react-router-dom";
import { handleRLayoutMenu } from "../../store/module/RLayout/actions";

function RLayout(props) {
  const history = useHistory();
  return <RLayoutUI {...props} history={history} renderRoutes={renderRoutes} />;
}

const mapState = (state) => state;
const mapDispatch = (dispatch) => {
  return {
    handleMenu: (pathName, history) =>
      handleRLayoutMenu(dispatch, pathName, history),
  };
};

export default connect(mapState, mapDispatch)(RLayout);
