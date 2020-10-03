import React, { useReducer, useState } from 'react'
import { Button, Input } from 'antd'

const ADD_COUNT = 'ADD_COUNT'
const DECE_COUNT = 'DECE_COUNT'

function reducerCount(state, action) {
  const { type } = action
  let ob = {
    [ADD_COUNT]: () => {
      return {
        count: state.count + 1,
      }
    },
    [DECE_COUNT]: () => {
      return {
        count: state.count - 1,
      }
    },
  }

  let result = ob[type]
  return result ? result() : state
}

function HookCount() {
  let [mess, dispatch] = useReducer(reducerCount, {
    count: 1,
  })
  return (
    <>
      <Button onClick={() => dispatch({ type: ADD_COUNT })}>+</Button>
      {mess.count}
      <Button onClick={() => dispatch({ type: DECE_COUNT })}>-</Button>
    </>
  )
}

function clone(data) {
  return JSON.parse(JSON.stringify(data))
}

const ADD_LIST = 'ADD_LIST'
const DECE_LIST = 'DECE_LIST'

function reducerList(state, action) {
  const { type } = action
  let ob = {
    [ADD_LIST]: () => {
      let state2 = clone(state)
      let { value } = action
      state2.data.push(action.value)
      return state2
    },
    [DECE_LIST]: () => {
      let state2 = clone(state)
      let { index } = action
      state2.data.splice(index, 1)
      return state2
    },
  }

  let result = ob[type]
  return result ? result() : state
}

function HookList() {
  const [mess, dispatch] = useReducer(reducerList, {
    data: [
      { name: 1, age: 2 },
      { name: 1, age: 2 },
    ],
  })

  const [inputValue, setInputValue] = useState('')

  const handleAdd = () => {
    let value = { name: inputValue, age: 2 }
    dispatch({ type: ADD_LIST, value })
  }

  const handleDece = index => {
    dispatch({ type: DECE_LIST, index })
  }

  const style = {
    display: 'flex',
    marginTop: '100px',
  }

  return (
    <>
      <div style={style}>
        <Input value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <Button onClick={handleAdd}>添加</Button>
      </div>
      <ul>
        {mess.data.map((it, index) => (
          <li key={index}>
            name:{it.name}---age:{it.age}
            <Button onClick={() => handleDece(index)}>删除</Button>
          </li>
        ))}
      </ul>
    </>
  )
}

function FourDemo() {
  return (
    <>
      <Button>Button</Button>
    </>
  )
}

function Hook() {
  return (
    <>
      <HookCount />
      <hr />
      <HookList />
    </>
  )
}

export default Hook
