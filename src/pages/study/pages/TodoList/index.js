import { connect } from 'react-redux'
import * as action from '../../store/modules/todolist/action'
import { Button } from 'antd'

function TodoList(props) {
  const { handleAdd, handleDece, reducerTodoList } = props
  const { count } = reducerTodoList

  return (
    <>
      <Button onClick={handleAdd}>+</Button>
      <span>{count}</span>
      <Button onClick={handleDece}>-</Button>
    </>
  )
}

const mapState = (state) => state

const mapDispatch = (dispatch) => {
  return {
    handleAdd: () => action.handleAdd(dispatch),
    handleDece: () => action.handleDece(dispatch)
  }
}

export default connect(mapState, mapDispatch)(TodoList)
