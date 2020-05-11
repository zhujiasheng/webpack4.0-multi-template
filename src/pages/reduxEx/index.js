import { Provider,connect } from 'react-redux'
import { descAction, addAction } from './store/action'
import store from './store'

function ToList (props) {
  const { add, desc, state} = props;
  
  return (<div>
      <button onClick={add}>+</button>
      <span>{state.count}</span>
      <button onClick={desc}>-</button>
   </div>
  );
}

//关键代码------start
const mapStateProps = (state) => {
  return {
    state
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    add: () => dispatch(addAction()),
    desc: () => dispatch(descAction())
  }
}

const App = connect(
  mapStateProps,
  mapDispatchProps
)(ToList)

const root = document.querySelector('#root');
ReactDOM.render(<Provider store={store}><App/></Provider>,root)
