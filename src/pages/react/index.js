import { Provider } from 'react-redux'
import store from './store'
import { HashRouter } from 'react-router-dom'
import routes from './router/configRouter'
import { renderRoutes } from 'react-router-config'
import { Suspense } from 'react'

const renderLoading = () => <div>loading</div>

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <Suspense fallback={renderLoading()}>{renderRoutes(routes)}</Suspense>
    </HashRouter>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
