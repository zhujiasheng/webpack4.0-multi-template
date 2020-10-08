import { useRef, useState, useEffect, useMemo } from 'react'
function HookUseRef() {
  const ref = useRef()
  const [count, setCount] = useState(100)
  const handleClick = () => {
    setCount(count => count + 1)
  }
  useEffect(() => {
    ref.current = count //可以记录上一次的值
    return () => {}
  }, [count])
  return (
    <>
      curr:{count}-before:{ref.current}
      <button onClick={handleClick}>test</button>
    </>
  )
}
export default HookUseRef
