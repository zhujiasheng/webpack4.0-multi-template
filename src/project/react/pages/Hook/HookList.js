import React, { useReducer, useState, useCallback } from 'react'
import { Button, Input } from 'antd'

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

function useList() {
  const [mess, dispatch] = useReducer(reducerList, {
    data: [
      { name: 1, age: 2 },
      { name: 1, age: 2 },
    ],
  })

  const [inputValue, setInputValue] = useState('')

  const changeInputvalue = e => {
    setInputValue(e.target.value)
  }

  const handleAdd = () => {
    let value = { name: inputValue, age: 2 }
    dispatch({ type: ADD_LIST, value })
  }

  const handleDece = index => {
    dispatch({ type: DECE_LIST, index })
  }

  return { mess, handleAdd, handleDece, inputValue, changeInputvalue }
}

function SearchUI(props) {
  const { inputValue, changeInputvalue, handleAdd } = props
  const style = {
    display: 'flex',
    marginTop: '100px',
  }
  return (
    <div style={style}>
      <Input value={inputValue} onChange={changeInputvalue} />
      <Button onClick={handleAdd}>添加</Button>
    </div>
  )
}

function ListUI(props) {
  const { mess, handleDece } = props
  return (
    <ul>
      {mess.data.map((it, index) => (
        <li key={index}>
          name:{it.name}---age:{it.age}
          <Button onClick={() => handleDece(index)}>删除</Button>
        </li>
      ))}
    </ul>
  )
}

function HookList() {
  const { mess, handleAdd, handleDece, inputValue, changeInputvalue } = useList()
  return (
    <>
      <SearchUI inputValue={inputValue} handleAdd={handleAdd} changeInputvalue={changeInputvalue} />
      <ListUI inputValue={inputValue} mess={mess} handleDece={handleDece} />
    </>
  )
}

export default HookList
