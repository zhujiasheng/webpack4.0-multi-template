import { withRouter, HashRouter, Switch, Route, Link, useHistory, useRouteMatch } from 'react-router-dom'

const First = () => <>First</>

const Second = () => {
  let { url, path } = useRouteMatch()
  console.log(url, path, 'match')
  return (
    <>
      <ul>
        <li>
          <Link to={`${url}/a`}>second-a &nbsp;</Link>
          <Link to={`${url}/b`}>second-b &nbsp;</Link>
          <Link to={`${url}/c`}>second-c &nbsp;</Link>
        </li>
        <li>
          <Switch>
            <Route path={`${path}/a`}>a</Route>
            <Route path={`${path}/b`}>b</Route>
            <Route path={`${path}/c`}>c</Route>
            <Route path={`${path}`}>d</Route>
          </Switch>
        </li>
      </ul>
    </>
  )
}

const Thrid = () => <>Thrid</>

const UserNav = withRouter(props => {
  let history = useHistory()
  const handleRouter = ({ id, path, name }) => {
    history.push(`${path}?id=${id}&name=${name}`)
  }
  return (
    <>
      <ul>
        <li onClick={() => handleRouter({ path: '/first' })}>first</li>
        <li onClick={() => handleRouter({ path: '/second', id: 1, name: 'rise' })}>second</li>
        <li onClick={() => handleRouter({ path: '/thrid', id: 2, name: 'js' })}>thrid</li>
      </ul>
    </>
  )
})

const Content = () => {
  return (
    <Switch>
      <Route exact path='/first'>
        <First />
      </Route>
      <Route path='/second'>
        <Second />
      </Route>
      <Route path='/thrid'>
        <Thrid />
      </Route>
      <Route path='/'>
        <First />
      </Route>
    </Switch>
  )
}

const Router = () => {
  return (
    <HashRouter>
      <UserNav />
      <Content />
    </HashRouter>
  )
}

export default Router
