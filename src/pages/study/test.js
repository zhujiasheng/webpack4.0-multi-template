import { Provider } from 'react-redux'
import store from './store'
// import TodoList from "./pages/TodoList";
import Hook from './pages/Hook'
// import Router from './router'

function App() {
  return (
    <>
      <Provider store={store}>
        {/* <Router /> */}
        {/* <TodoList /> */}
        <Hook />
      </Provider>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
