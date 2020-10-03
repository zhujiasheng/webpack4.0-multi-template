/**
 * 1.定义reducer、actions规则
 *   reducer对页面数据操作
 *   action去处理页面业务逻辑、以及通过dispatch调用对应的reducer规则
 *   
 * 2.定义store文件 store.js
 *   crateStore 、combineReducer （redux）
 *   thunk（react-thunk)
 *   引入对应reducer
 * 
 * 3.组件中使用store
 *   引入connect(react-store)
 *   导出connect(mapState,mapDispatch)(组件名)
 *   mapState => state => state
 *   mapDispatch = dispatch => ({
 *      f1:(value) => action.f1(dispath,value),
 *      f2:(value) => action.f2(dispath,value)
 *   })
 * 
 * 4.入口文件
 *   import store from './store.js'
 *   import {Provider} from 'react-redux'
 *   const App = () => (
      <Provider store={store}>
         ...路由
      </Provider>
      );
      ReactDOM.render(<App />, root);
 */
