import { Provider } from 'react-redux'
import store from './store'
// import TodoList from "./pages/TodoList";
import Hook from './pages/Hook'

import {
  withRouter,
  HashRouter,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useParams,
  useRouteMatch,
} from 'react-router-dom'
// import {withRouter} from 'react-router';

const First = () => <>First</>
const Second = () => {
  // let match = useRouteMatch({
  //   path: '/to',
  //   exact: false
  // });
  return <>Second</>
}
const Thrid = () => <>Thrid</>

const UserNav = withRouter(props => {
  let history = useHistory()
  const handleRouter = ({ id, path, name }) => {
    // const {name,id,path} = queryParams();
    history.push(`${path}?id=${id}&name=${name}`)
    // history.push(`${path}/${id}/${name}`)
  }
  return (
    <>
      <ul>
        <li onClick={() => handleRouter({ path: '/first' })}>first</li>
        <li onClick={() => handleRouter({ path: '/second', id: 1, name: 'rise' })}>second2</li>
        <li onClick={() => handleRouter({ path: '/thrid', id: 2, name: 'js' })}>thrid</li>
      </ul>
    </>
  )
})

const Router = () => {
  return (
    <HashRouter>
      <UserNav />
      <Switch>
        <Route exact path='/first'>
          <First />
        </Route>
        <Route path='/Second/:id/:name'>
          <Second />
        </Route>
        <Route path='/Thrid'>
          <Thrid />
        </Route>
        <Route path='/'>
          <First />
        </Route>
      </Switch>
    </HashRouter>
  )
}

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
        {/* <TodoList /> */}
        {/* <Hook /> */}
      </Provider>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
