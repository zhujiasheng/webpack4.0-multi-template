import React, { useReducer, useState, useCallback } from 'react'
import { Button, Input } from 'antd'

const ADD_COUNT = 'ADD_COUNT'
const DECE_COUNT = 'DECE_COUNT'
const RESET_COUNT = 'RESET_COUNT'

function reducerCount(state, action) {
  const { type, value } = action
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
    [RESET_COUNT]: () => {
      return {
        count: value ? value : 0,
      }
    },
  }

  let result = ob[type]
  return result ? result() : state
}

function useCount() {
  let [mess, dispatch] = useReducer(reducerCount, {
    count: 1,
  })
  const handleAdd = () => {
    dispatch({ type: ADD_COUNT })
  }
  const handleDece = () => {
    dispatch({ type: DECE_COUNT })
  }
  const handleRest = () => {
    dispatch({ type: RESET_COUNT, value: -10 })
  }

  const isEven = useCallback(() => {
    let i = 0
    for (i = 0; i < 1000000; i++) {}
    console.log(mess.count, ' mess.count')
    return i % mess.count ? 'true' : 'false'
  }, [mess.count])

  return [mess, handleAdd, handleDece, handleRest, isEven]
}

function HookCount() {
  const [mess, handleAdd, handleDece, handleRest, isEven] = useCount()
  return (
    <>
      <Button onClick={handleAdd}>+</Button>
      {mess.count}--even={isEven()}
      <Button onClick={handleDece}>-</Button>
      <Button onClick={handleRest}>reset</Button>
    </>
  )
}

export default HookCount
