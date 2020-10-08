## npm-cli-multi

```
配置一个多页项目脚手架
目前处于研发阶段
仅供参考学习
不建议用到实际项目生产中
```

study

```
import {useState,useEffect,useCallback,useRef} from 'react'
import {useMount useSelections} from '@umijs/hooks'
import {prop,pipe,isEmpty,map,flattenDeep,find,noop} from 'lodash/ft'
import withGlobalLoading from '@/hot/withGlobalLoading'
withGlobalLoading(Home)
```

#### hook使用
```
useState
useEffect
useReducer
useContext
useRef
useCallback
useMemo
```

#### redux react-redux
```
1.入口文件 main.js
import {Provider} from 'react-redux'
import store from './store'
ReactDOM.render(<Provider store={store}><App/></Provider>,root)

2.定义reducer reducer.js
const {ADD_COUNT,DECE_COUNT} from './actionType'
const initState = {
  count:1
}
export const reducerCount = (state = initState,action){
  const {type} = action;
  let ob = {
    [ADD_COUNT](){
      return {
        count:state.count + 1
      }
    },
    [DECE_COUNT](){
      return {
        count:state.count - 1
      }
    }
  }
  let result = ob[type]
  return result ? result() : state
}
```

3.定义action action.js actionType.js
action.js
```
const {ADD_COUNT,DECE_COUNT} from './actionType'
export const handleAdd = (dispatch) => {
  dispatch({type:ADD_COUNT})
}
export const handleDece= (dispatch) => {
  dispatch({type:DECE_COUNT})
}
```

actionType.js
```
export const ADD_COUNT = 'ADD_COUNT'
export const DECE_COUNT = 'DECE_COUNT'
```

4.入口文件store store.js
```
import {crateStore,combineReducers,applyMiddleware} from 'redux'
import thunk form 'redux-thunk'
import {reducerCount} from './reducer'

const reducer = combineReducer({reducerCount})
export default createStore(reducer,applyMiddleware(thunk))
```

5.组件使用redux
```
import {connect} from 'react-redux'
import action from './action'

const mapState = (state) => state
const mapDispatch = (dispatch) => ({
  handleAdd:action.handleAdd,
  handleDece:action.handleDece
})

function CountList(props){
  const {reducerCount,handleAdd,handleDece}  = props 
  const {count} = reducerCount

  return <>
    <button onClick={handleAdd}>+</button>
    {count}
    <button onClick={handleDece}>-</button>
  </>
}
export default connect(mapState,mapDispatch)(CountList)
```