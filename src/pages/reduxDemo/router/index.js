import { HashRouter,Switch,Route,Redirect, Link} from 'react-router-dom'
import BaseList from '../components/baseList'
import CardList from '../components/cardList'

function BaseRouer () {
  return (
    <HashRouter>
      <div>
        <Link to="/baseList">baseList</Link>&nbsp;
        <Link to="/cardList">cardList</Link>
      </div>
      <Switch>
        <Route path="/baseList"><BaseList/></Route>
        <Route path="/cardList"><CardList/></Route>
        <Redirect to="/baseList" exact/>
      </Switch>
    </HashRouter>
  )
}

export default BaseRouer
