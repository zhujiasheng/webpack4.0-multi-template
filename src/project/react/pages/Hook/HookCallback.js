import { useState, useCallback, useMemo, memo } from 'react'

// const WrapFirst = memo(ChildFirst)
const WrapSecond = memo(ChildSecond)

function HookCallback() {
  const [first, setFirst] = useState(1)
  const [second, setSecond] = useState(10)

  const handleFirst = () => {
    console.log('handleFirst')
    setFirst(first => first + 1)
  }

  const handleSecond = useCallback(() => {
    console.log('handleSecond')
    setSecond(second => second + 1)
  }, [second])

  const calcSecond = useMemo(() => {
    return { name: second, color: second % 2 }
  }, [second])

  return (
    <>
      <div>
        <div>
          first:{first}-- <button onClick={handleFirst}>handleFirst</button>
        </div>
        <WrapSecond second={calcSecond} clickButton={handleSecond} />
      </div>
    </>
  )
}

function ChildSecond(props) {
  console.log('ChildSecond', props)
  return (
    <div>
      <button onClick={props.clickButton}>
        {props.second.name}---{props.second.color}
      </button>
    </div>
  )
}

export default HookCallback
